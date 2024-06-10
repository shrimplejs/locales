import getAllLocales from "./getAllLocales";
import { InterpolationObject } from "./types";

export default function stringToJsonKey(key: string, obj: any, defaultLang: string, fallbackLang: string, interp?: InterpolationObject): string {
    const value = getAllLocales(key, obj, interp)[defaultLang] || getAllLocales(key, obj)[fallbackLang] || key;
    return value;
}