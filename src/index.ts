import getAllLocales from './util/getAllLocales.js'
import stringToJsonKey from './util/stringToJsonKey.js'
import { InterpolationObject, LocalizationOptions } from './util/types'

export class Localization {
    private initOptions: LocalizationOptions
    private initLocales: LocalizationOptions['locales']

    constructor(options: LocalizationOptions) {
        this.initOptions = options
        this.initLocales = JSON.parse(JSON.stringify(options.locales))
    }

    get(key: string, interp?: InterpolationObject, lang?: string) {
        return stringToJsonKey(key, this.initLocales, lang || this.initOptions.defaultLocale, this.initOptions.fallbackLocale, interp)
    }

    localizationFor(key: string) {
        return getAllLocales(key, this.initOptions.locales)
    }

    changeLanguage(lang: string) {
        this.initOptions.defaultLocale = lang
    }
}
