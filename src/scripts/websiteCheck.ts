/**
 * Free website check — client-side PageSpeed Insights.
 *
 * The site is static, so there is no backend to fetch a stranger's website
 * from (and the browser could not, because of CORS). Instead the visitor's
 * own browser asks Google's PageSpeed Insights API, which is CORS-enabled
 * and free. Nothing touches our servers, and nothing is stored.
 *
 * An API key is optional: without one Google applies a low anonymous quota,
 * which is fine for occasional use. Set PUBLIC_PSI_KEY to raise it — such a
 * key is public by design and should be restricted by HTTP referrer in the
 * Google Cloud console.
 */

const ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

export interface CheckStrings {
  errors: { invalid: string; failed: string; quota: string; unreachable: string };
}

export interface CheckResult {
  finalUrl: string;
  scores: { performance: number; accessibility: number; bestPractices: number; seo: number };
  vitals: { id: 'lcp' | 'cls' | 'tbt' | 'si'; display: string; score: number }[];
  opportunities: { title: string; savingsMs: number }[];
}

/** Accepts "example.com", "www.example.com/x", "https://example.com". */
export function normaliseUrl(raw: string): string | null {
  const value = raw.trim();
  if (!value) return null;
  const withScheme = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  let url: URL;
  try {
    url = new URL(withScheme);
  } catch {
    return null;
  }
  // Require a dotted hostname so "foo" or "localhost" don't get sent to Google
  if (!/^[^\s.]+(\.[^\s.]+)+$/.test(url.hostname)) return null;
  return url.toString();
}

export class CheckError extends Error {
  constructor(public kind: 'invalid' | 'failed' | 'quota' | 'unreachable') {
    super(kind);
  }
}

const VITAL_AUDITS = {
  lcp: 'largest-contentful-paint',
  cls: 'cumulative-layout-shift',
  tbt: 'total-blocking-time',
  si: 'speed-index',
} as const;

export async function runCheck(rawUrl: string, apiKey?: string): Promise<CheckResult> {
  const url = normaliseUrl(rawUrl);
  if (!url) throw new CheckError('invalid');

  const params = new URLSearchParams({ url, strategy: 'mobile' });
  for (const c of ['performance', 'accessibility', 'best-practices', 'seo']) {
    params.append('category', c);
  }
  if (apiKey) params.set('key', apiKey);

  let response: Response;
  try {
    response = await fetch(`${ENDPOINT}?${params}`);
  } catch {
    throw new CheckError('failed');
  }

  if (!response.ok) {
    if (response.status === 429) throw new CheckError('quota');
    // Google answers 400/500 when it could not load the target page
    if (response.status === 400 || response.status === 500) throw new CheckError('unreachable');
    throw new CheckError('failed');
  }

  const data = await response.json();
  const lh = data?.lighthouseResult;
  if (!lh?.categories) throw new CheckError('unreachable');

  const pct = (v: unknown) => Math.round(((v as number) ?? 0) * 100);

  const vitals = (Object.keys(VITAL_AUDITS) as (keyof typeof VITAL_AUDITS)[])
    .map((id) => {
      const audit = lh.audits?.[VITAL_AUDITS[id]];
      if (!audit?.displayValue) return null;
      return { id, display: String(audit.displayValue), score: (audit.score as number) ?? 0 };
    })
    .filter(Boolean) as CheckResult['vitals'];

  const opportunities = Object.values(lh.audits ?? {})
    .map((a: any) => ({
      title: String(a?.title ?? ''),
      savingsMs: Number(a?.details?.overallSavingsMs ?? 0),
    }))
    .filter((o) => o.savingsMs >= 150)
    .sort((a, b) => b.savingsMs - a.savingsMs)
    .slice(0, 5);

  return {
    finalUrl: String(lh.finalUrl ?? lh.requestedUrl ?? url),
    scores: {
      performance: pct(lh.categories.performance?.score),
      accessibility: pct(lh.categories.accessibility?.score),
      bestPractices: pct(lh.categories['best-practices']?.score),
      seo: pct(lh.categories.seo?.score),
    },
    vitals,
    opportunities,
  };
}

export function band(score: number): 'good' | 'ok' | 'poor' {
  return score >= 90 ? 'good' : score >= 50 ? 'ok' : 'poor';
}
