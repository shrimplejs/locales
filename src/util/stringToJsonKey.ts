export default function stringToJsonKey(key: string, obj: any, defaultLang: string, fallbackLang: string) {
    const keys = key.split('.');

    let value = obj[defaultLang];

    // Traverse the object using the keys
    for (let i = 0; i < keys.length; i++) {
        if (value && keys[i] in value) {
            value = value[keys[i]];
        } else {
            // If the key is not found in the default language, try the fallback language
            value = obj[fallbackLang];
            for (let j = 0; j < keys.length; j++) {
                if (value && keys[j] in value) {
                    value = value[keys[j]];
                } else {
                    // If the key is not found in the fallback language, return the original key or undefined based on handleInexistentKey
                    return key
                }
            }
            break;
        }
    }

    return value;
}