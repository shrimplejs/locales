import sanitize from './sanitize';
import { Interpolations } from './types';

export function interpolate(text: string, interpolations?: Interpolations) {
  if (!interpolations) return text;

  for (const key in interpolations) {
    // sanitize the key to prevent XSS
    text = text.replaceAll(`{{${key}}}`, sanitize(interpolations[key] as string));
  }
  return text;
}
