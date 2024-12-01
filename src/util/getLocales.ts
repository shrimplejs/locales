import { interpolate } from './interpolate';
import { Interpolations, LocaleObject, Locales } from './types';

export default function getLocales(args: Args): string | Record<string, string> {
  const { key, locales, defaultLang, fallbackLang, interpolations } = args;
  const translations: Record<string, string> = {};

  for (const lang in locales) {
    // Navigate through nested keys
    let value = locales[lang];
    for (const k of key.split('.')) {
      value = value[k] as LocaleObject;
      if (!value) break;
    }

    // Handle both string values and object values
    if (value) {
      if (typeof value === 'object') {
        const innerKey = Object.keys(value)[0];
        const interpolatedKey = interpolate(innerKey, interpolations);
        translations[lang] = value[interpolatedKey] as string;
      } else if (typeof value === 'string') {
        translations[lang] = interpolate(value, interpolations);
      }
    }
  }

  // If defaultLang is provided, return single translation with fallback
  if (defaultLang) {
    return translations[defaultLang] || translations[fallbackLang!] || key;
  }

  // Otherwise return all translations
  return translations;
}

type Args = {
  key: string;
  locales: Locales;
  defaultLang?: string;
  fallbackLang?: string;
  interpolations?: Interpolations;
};
