import { notFound } from "next/navigation";
import AtlasApp from "../AtlasApp";
import { atlasMetadata } from "../metadata-helpers";
import { isLocale } from "../route-guards";

export function generateStaticParams() { return [{ locale: "tr" }, { locale: "en" }]; }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? atlasMetadata(locale) : {};
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <AtlasApp locale={locale} />;
}
