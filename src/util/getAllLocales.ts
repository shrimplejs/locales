import replaceInterps from "./replaceInterps";
import { InterpolationObject, LocaleObject, Locales } from "./types";

export default function getAllLocales(key: string, obj: Locales, interp?: InterpolationObject) {
    const keys = key.split('.');
    const values = [];

    for (const lang in obj) {
        let value = obj[lang];
        for (let i = 0; i < keys.length; i++) {
            if (value && keys[i] in value) {
                value = value[keys[i]] as LocaleObject;
            } else {
                // @ts-expect-error We're modifiying the value here, so there's no need for that type error
                value = undefined;
                break;
            }
        }
        if (value) {
            switch (typeof value) {
                case 'object':
                    // remove [0] if it gets annoying and only returns the first key
                    const innerKey = Object.keys(value)[0];
                    const ikWithInterps = replaceInterps(innerKey, interp);
                    value = { [lang]: value[ikWithInterps] };
                    break;
                case 'string':
                    value = { [lang]: replaceInterps(value, interp) };
                    break;
            }
        }
        values.push(value);
    }
    return Object.assign({}, ...values);
}