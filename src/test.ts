import { Localization } from "../dist";

export const locales = new Localization({
    defaultLocale: 'en',
    fallbackLocale: 'en',
    locales: {
        en: {
            hello: 'Hello',
            inside: {
                world: 'World',
                'another/object': {
                    key: 'key inside'
                }
            }
        },
        es: {
            hello: 'Hola',
            inside: {
                world: 'Mundo',
                'another/object': {
                    key: 'key dentro'
                }
            }
        }
    }
})