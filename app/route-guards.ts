import { routeSurfaces, type Locale, type Surface } from "./atlas-data";

export function isLocale(value: string): value is Locale { return value === "tr" || value === "en"; }
export function isSurface(value: string): value is Surface { return routeSurfaces.includes(value as Surface); }
