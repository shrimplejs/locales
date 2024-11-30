import getLocales from './util/getLocales';
import { Interpolations, LocalizationOptions } from './util/types';

export class Localization {
  private initOptions: LocalizationOptions;
  private initLocales: LocalizationOptions['locales'];

  constructor(options: LocalizationOptions) {
    this.initOptions = options;
    this.initLocales = JSON.parse(JSON.stringify(options.locales));
  }

  t(key: string, interp?: Interpolations, lang = this.initOptions.defaultLocale) {
    return getLocales({
      key,
      locales: this.initLocales,
      defaultLang: lang,
      fallbackLang: this.initOptions.fallbackLocale,
      interpolations: interp,
    }) as string;
  }

  localizationFor(key: string) {
    return getLocales({
      key,
      locales: this.initLocales,
    }) as Record<string, string>;
  }

  changeLanguage(lang: string) {
    this.initOptions.defaultLocale = lang;
  }
}
