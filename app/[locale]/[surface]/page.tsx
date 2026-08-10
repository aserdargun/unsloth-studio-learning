import { notFound } from "next/navigation";
import AtlasApp from "../../AtlasApp";
import { routeSurfaces } from "../../atlas-data";
import { atlasMetadata } from "../../metadata-helpers";
import { isLocale, isSurface } from "../../route-guards";

export function generateStaticParams() { return ["tr", "en"].flatMap((locale) => routeSurfaces.map((surface) => ({ locale, surface }))); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; surface: string }> }) {
  const { locale, surface } = await params;
  return isLocale(locale) && isSurface(surface) ? atlasMetadata(locale, surface) : {};
}

export default async function SurfacePage({ params }: { params: Promise<{ locale: string; surface: string }> }) {
  const { locale, surface } = await params;
  if (!isLocale(locale) || !isSurface(surface)) notFound();
  return <AtlasApp locale={locale} surface={surface} />;
}
