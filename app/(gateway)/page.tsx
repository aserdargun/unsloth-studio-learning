"use client";

import Link from "next/link";
import { useEffect } from "react";

const LANGUAGE_KEY = "unsloth-atlas-language";

export default function Home() {
  useEffect(() => {
    const saved = window.localStorage.getItem(LANGUAGE_KEY);
    const locale = saved === "en" || saved === "tr" ? saved : navigator.language.toLowerCase().startsWith("tr") ? "tr" : "en";
    window.location.replace(`/${locale}/`);
  }, []);

  return <main className="locale-gateway"><p className="eyebrow">UNSLOTH STUDIO LEARNING ATLAS</p><h1>Choose your learning language</h1><p>Öğrenme dilini seç · Choose your learning language</p><div className="gateway-actions"><Link href="/tr/">Türkçe</Link><Link href="/en/">English</Link></div></main>;
}
