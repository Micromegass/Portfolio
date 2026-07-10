import type { Locale } from '@/lib/i18n';
import type { SiteContent } from './types';
import { en } from './en';
import { de } from './de';
import { es } from './es';

export const content: Record<Locale, SiteContent> = { en, de, es };

export function t(locale: Locale): SiteContent {
  return content[locale];
}
