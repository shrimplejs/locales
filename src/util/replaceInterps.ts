import { InterpolationObject } from "./types";
import sanitizeText from "./sanitizeText";

export default function replaceInterps(str: string, interp?: InterpolationObject) {
    for (const key in interp) {
        // sanitize the key to prevent XSS
        str = str.replaceAll(`{{${key}}}`, sanitizeText(interp[key] as string));
    }
    return str;
}