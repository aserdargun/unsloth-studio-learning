import type { Metadata, Viewport } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://unsloth.aserdargun.com"),
  title: { default: "Unsloth Studio Learning Atlas", template: "%s · Unsloth Studio Learning Atlas" },
  description: "A bilingual, evidence-aware learning atlas for Unsloth Studio, LoRA, QLoRA, dataset engineering, evaluation, and local model deployment.",
  applicationName: "Unsloth Studio Learning Atlas",
  authors: [{ name: "Serdar Gündoğdu", url: "https://aserdargun.com" }],
  keywords: ["Unsloth", "LoRA", "QLoRA", "fine-tuning", "LLM", "RTX 4070 Ti Super", "learning atlas"],
  icons: { icon: "/icon.png", shortcut: "/icon.png", apple: "/icon.png" },
  openGraph: { type: "website", url: "https://unsloth.aserdargun.com", siteName: "Unsloth Studio Learning Atlas", title: "Unsloth Studio Learning Atlas", description: "From first principles to evidence-backed fine-tuning on a 16 GB GPU.", images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Unsloth Studio Learning Atlas — TR / EN" }] },
  twitter: { card: "summary_large_image", title: "Unsloth Studio Learning Atlas", description: "A bilingual, evidence-aware path from LoRA concepts to local deployment.", images: ["/og.png"] },
};

export const baseViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#1d2021" }, { media: "(prefers-color-scheme: light)", color: "#f9f5d7" }],
};

export const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Unsloth Studio Learning Atlas",
  description: "A 12-week bilingual learning path for evidence-aware LoRA and QLoRA engineering.",
  provider: { "@type": "Person", name: "Serdar Gündoğdu", url: "https://aserdargun.com" },
  inLanguage: ["tr", "en"],
  isAccessibleForFree: true,
};
