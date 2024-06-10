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

    t(key: string, interp?: InterpolationObject, lang = this.initOptions.defaultLocale) {
        return stringToJsonKey(key, this.initLocales, lang, this.initOptions.fallbackLocale, interp)
    }

    localizationFor(key: string) {
        return getAllLocales(key, this.initOptions.locales)
    }

    changeLanguage(lang: string) {
        this.initOptions.defaultLocale = lang
    }
}
