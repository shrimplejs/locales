import stringToJsonKey from './util/stringToJsonKey.js'
import { JSONValue } from './util/types'

export class Localization {
    private initOptions: LocalizationOptions
    private initLocales: LocalizationOptions['locales']

    constructor(options: LocalizationOptions) {
        this.initOptions = options
        this.initLocales = JSON.parse(JSON.stringify(options.locales))
    }

    get(key: string, lang?: string) {
        return stringToJsonKey(key, this.initLocales, lang || this.initOptions.defaultLocale, this.initOptions.fallbackLocale)
    }

    changeLanguage(lang: string) {
        this.initOptions.defaultLocale = lang
    }
}

interface LocalizationOptions {
    locales: {
        [lang: string]: JSONValue;
    };
    defaultLocale: string;
    fallbackLocale: string;
}