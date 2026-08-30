/**
 * Generates the assistant's knowledge base from the site's own content files,
 * so the chatbot can never drift from what the website actually says.
 *
 * Run:  npm run build:knowledge   (also runs before deploying the worker)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const { en } = await import(path.join(root, 'src/data/en.ts'));
const { de } = await import(path.join(root, 'src/data/de.ts'));
const { es } = await import(path.join(root, 'src/data/es.ts'));
const { routes, studio } = await import(path.join(root, 'src/lib/i18n.ts'));

const SERVICES = ['relaunch', 'ai', 'apps'];

/** One markdown document per language — what the assistant is allowed to know. */
function knowledgeFor(c, locale) {
  const url = (key) => `https://${studio.domain}${routes[key][locale]}`;
  const L = [];

  L.push(`# ${studio.name} — ${studio.tagline[locale]}`);
  L.push('');
  L.push(c.about.lead);
  L.push('');
  L.push(`Contact: ${studio.email}`);
  L.push(`Locations: ${c.footer.locations}`);
  L.push(`Working languages: German, English, Spanish.`);
  L.push('');

  L.push('## Services');
  for (const key of SERVICES) {
    const s = c.services[key];
    L.push('');
    L.push(`### ${s.cardTitle} — ${url(key)}`);
    L.push(s.lead);
    L.push('');
    L.push(`${s.problem.title}: ${s.problem.body}`);
    L.push(`${s.solution.title}: ${s.solution.body}`);
    L.push('');
    L.push(`${s.includesLabel}: ${s.includes.join('; ')}`);
    L.push(`${s.forWhomLabel}: ${s.forWhom.join('; ')}`);
    L.push('');
    L.push(`${s.faqLabel}:`);
    for (const f of s.faq) L.push(`- Q: ${f.q}\n  A: ${f.a}`);
  }

  L.push('');
  L.push('## How working with the studio works');
  for (const [i, step] of c.home.process.steps.entries()) {
    L.push(`${i + 1}. ${step.title} — ${step.body}`);
  }
  L.push('');
  L.push(`Facts stated on the site: ${c.home.facts.map((f) => `${f.value} (${f.label})`).join('; ')}.`);

  L.push('');
  L.push('## Case studies');
  for (const key of ['physio', 'ikuna']) {
    const cs = c.cases[key];
    L.push('');
    L.push(`### ${cs.title} — ${cs.client} (${cs.sector})`);
    L.push(`Live site: ${cs.url}. Case study page: ${url(key === 'physio' ? 'case-physio' : 'case-ikuna')}`);
    L.push(cs.summary);
    L.push(cs.specs.map((s) => `${s.label}: ${s.value}`).join('; '));
    for (const sec of cs.sections) L.push(`${sec.heading} ${sec.body}`);
    L.push(`${cs.outcomeLabel}: ${cs.outcomes.join('; ')}`);
  }

  L.push('');
  L.push(`## ${c.work.buildsTitle}`);
  L.push(c.work.buildsIntro);
  for (const p of c.work.builds) {
    // The status matters here: the assistant must never imply an unlaunched
    // project is live, and must only offer a link where one actually exists.
    L.push(
      `- ${p.client} (${p.sector}) — ${p.status}: ${p.desc}${p.preview ? ` Preview: ${p.preview.url}` : ''}`
    );
  }

  // Prices are the one topic where the assistant is allowed to be specific, so
  // the published figures have to reach it verbatim — and the unpriced tiers
  // have to reach it just as clearly as "no list price exists".
  L.push('');
  L.push(`## ${c.pricing.title} — ${url('pricing')}`);
  L.push(c.pricing.lead);
  L.push(c.pricing.promise);
  for (const tier of c.pricing.tiers) {
    L.push('');
    L.push(
      tier.price
        ? `### ${tier.name}: ${tier.price} (${tier.priceNote}) — ${tier.time}`
        : `### ${tier.name}: no published price — quoted after a conversation. Never estimate one.`
    );
    L.push(tier.desc);
    L.push(`${tier.includesLabel}: ${tier.includes.join('; ')}`);
  }
  for (const plan of c.pricing.care) {
    L.push('');
    L.push(
      plan.price
        ? `### ${plan.name}: ${plan.price} (${plan.priceNote})`
        : `### ${plan.name}: no published price — agreed individually.`
    );
    L.push(plan.desc);
    L.push(`${plan.includesLabel}: ${plan.includes.join('; ')}`);
  }
  L.push('');
  L.push(`${c.pricing.notesLabel}: ${c.pricing.notes.join(' ')}`);
  L.push(c.pricing.updated);
  L.push('');
  L.push(`${c.pricing.faqLabel}:`);
  for (const f of c.pricing.faq) L.push(`- Q: ${f.q}\n  A: ${f.a}`);

  L.push('');
  L.push('## Contact');
  L.push(`${c.contact.body} ${c.contact.availability} ${c.contact.languagesNote}`);
  L.push(`${c.contact.includeTitle}: ${c.contact.include.join('; ')}`);

  L.push('');
  L.push('## Free website check');
  L.push(`${url('check')} — ${c.check.lead}`);
  L.push(c.check.explain.map((e) => `${e.term}: ${e.body}`).join('\n'));

  L.push('');
  L.push('## The studio and the person behind it');
  L.push(`${c.about.personTitle}: ${c.about.personLead}`);
  for (const t of c.about.timeline) L.push(`- ${t.period} — ${t.title}: ${t.body}`);
  L.push('');
  L.push(c.about.principles.map((p) => `${p.title}: ${p.body}`).join('\n'));

  L.push('');
  L.push('## Page map');
  for (const [key, paths] of Object.entries(routes)) {
    L.push(`- ${key}: https://${studio.domain}${paths[locale]}`);
  }

  return L.join('\n');
}

const out = `// GENERATED FILE — do not edit by hand.
// Source: src/data/{en,de,es}.ts via scripts/build-knowledge.mjs
// Regenerate with: npm run build:knowledge

export const KNOWLEDGE: Record<'en' | 'de' | 'es', string> = {
  en: ${JSON.stringify(knowledgeFor(en, 'en'))},
  de: ${JSON.stringify(knowledgeFor(de, 'de'))},
  es: ${JSON.stringify(knowledgeFor(es, 'es'))},
};
`;

const target = path.join(root, 'backend/src/knowledge.generated.ts');
fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, out);

const sizes = Object.entries({ en, de, es }).map(
  ([k, v]) => `${k}=${Math.round(knowledgeFor(v, k).length / 1024)}KB`
);
console.log('wrote backend/src/knowledge.generated.ts —', sizes.join(' '));
