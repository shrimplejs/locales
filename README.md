# shrimple-locales

A zero-dependency (for the forseen future hopefully), typescript-ready, fast, lightweight and, of course, shrimple package to localize your projects.

# Getting started

First get your locale files going. A json file is enough:
```json
// en.json
{
    "salutes": {
        "hello": "Hello",
        "goodbye": "Goodbye"
    },
    "world": "World"
}

// es.json
{
    "salutes": {
        "hello": "Hola",
        "goodbye": "Adiós"
    },
    "world": "Mundo"
}
```

Then, you can use the package like this:
```ts
import { Localization } from "shrimple-locales";
import enLocale from "./en.json";
import esLocale from "./es.json";

const loc = new Localization({
    defaultLocale: "en",
    fallbackLocale: "en",
    locales: {
        en: enLocale,
        es: esLocale
    }
})

// ... later in the code
foo(`${loc.get('salutes.hello')} ${loc.get('world')}`) // Hello World

loc.setLocale('es')
foo(`${loc.get('salutes.hello')} ${loc.get('world')}`) // Hola Mundo
```

# Roadmap
- [x] Basic functionality
- [x] Fallback locales
- [x] Default locales
- [x] Set locale
- [x] Get all locales (`localizationFor()`)
- [] Make the package read files or a directory  
... and more to come!