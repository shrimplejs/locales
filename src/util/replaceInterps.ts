import { InterpolationObject } from "./types";

export default function replaceInterps(str: string, interp?: InterpolationObject) {
    console.log(interp)
    for (const key in interp) {
        str = str.replaceAll(`{{${key}}}`, interp[key] as string);
    }
    return str;
}