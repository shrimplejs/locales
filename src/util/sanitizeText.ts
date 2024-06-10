const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
//    '"': '&quot;',
//    "'": '&#39;',
//    '/': '&#x2F;',
//    '`': '&#x60;',
//    '=': '&#x3D;'
};

export default function sanitizeText(text: string) {
    return text.replace(/[&<>]/g, function (s) {
        // @ts-ignore should be fine :clueless:
        return entityMap[s];
    });
}