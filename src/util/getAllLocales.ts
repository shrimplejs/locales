export default function getAllLocales(key: string, obj: any) {
    const keys = key.split('.');
    const values = [];

    for (const lang in obj) {
        let value = obj[lang];
        for (let i = 0; i < keys.length; i++) {
            if (value && keys[i] in value) {
                value = value[keys[i]];
                break;
            } else {
                value = undefined;
                break;
            }
        }
        if (value) {
            switch (typeof value) {
                case 'object':
                    const innerKey = Object.keys(value)[0];
                    value = { [lang]: value[innerKey] };
                    break;
                case 'string':
                    value = { [lang]: value };
                    break;
            }
        }
        values.push(value);
    }
    return Object.assign({}, ...values);
}