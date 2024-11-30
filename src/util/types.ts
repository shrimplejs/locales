export type LocaleObject = {
  [key: string]: string | LocaleObject;
};

export type Locales = {
  [lang: string]: LocaleObject;
};

export interface LocalizationOptions {
  locales: Locales;
  defaultLocale: string;
  fallbackLocale: string;
}

export type Interpolations = {
  [key: string]: string;
};
