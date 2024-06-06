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
    locales: {
        [lang: string]: JSONValue;
    };
    defaultLocale: string;
    fallbackLocale: string;
}
