import { notFound } from "next/navigation";
import AtlasApp from "../../../AtlasApp";
import { lessons } from "../../../atlas-data";
import { atlasMetadata } from "../../../metadata-helpers";
import { isLocale } from "../../../route-guards";

export function generateStaticParams() { return ["tr", "en"].flatMap((locale) => lessons[locale as "tr" | "en"].map(({ slug }) => ({ locale, slug }))); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  return isLocale(locale) && lessons[locale].some((lesson) => lesson.slug === slug) ? atlasMetadata(locale, "dashboard", slug) : {};
}

export default async function LessonPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !lessons[locale].some((lesson) => lesson.slug === slug)) notFound();
  return <AtlasApp locale={locale} slug={slug} />;
}
