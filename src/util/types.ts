// json types
export type JSONValue =
    | string
    | number
    | boolean
    | JSONObject
    | JSONArray;

export interface JSONObject {
    [x: string]: JSONValue;
}

export interface JSONArray extends Array<JSONValue> { }

export interface LocalizationOptions {
    locales: Locales;
    defaultLocale: string;
    fallbackLocale: string;
}

export interface InterpolationObject {
    [key: string]: string | (() => boolean) | undefined;
    pluralChecker?: string | (() => boolean);
}

export type LocaleObject = {
  [key: string]: string | LocaleObject;
};

export type Locales = {
  [lang: string]: LocaleObject;
};