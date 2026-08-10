import { IBM_Plex_Mono, Manrope } from "next/font/google";
import { baseMetadata, baseViewport, courseJsonLd } from "../site-config";
import "../globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin", "latin-ext"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin", "latin-ext"], weight: ["400", "500", "600"] });

export const metadata = baseMetadata;
export const viewport = baseViewport;

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  return <html lang={locale === "en" ? "en" : "tr"} suppressHydrationWarning><body className={`${manrope.variable} ${plexMono.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />{children}</body></html>;
}
