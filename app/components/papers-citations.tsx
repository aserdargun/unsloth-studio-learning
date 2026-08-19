"use client";

// Paper Reading Hub + Citation Kit bileşenleri.
// Evidence sayfasının altına gömülü olarak eklenir.

import type { Locale } from "../atlas-data";
import { paperReadings, citationKit } from "../atlas-extras";

function EvidencePill({ locale, level }: { locale: Locale; level: "verified" | "observed" | "planned" | "unknown" | "simulation" }) {
  const tr = locale === "tr";
  const map = {
    verified: tr ? "Doğrulandı" : "Verified",
    observed: tr ? "Gözlendi" : "Observed",
    planned: tr ? "Planlandı" : "Planned",
    unknown: tr ? "Bilinmiyor" : "Unknown",
    simulation: tr ? "Simülasyon" : "Simulation",
  } as const;
  return <span className={`evidence-pill evidence-${level}`}>{map[level]}</span>;
}

export function PaperReadingHub({ locale }: { locale: Locale }) {
  const tr = locale === "tr";
  const papers = paperReadings[locale];
  return (
    <section className="papers-hub">
      <div className="section-heading">
        <div>
          <p className="kicker">{tr ? "OKUMA LİSTESİ" : "READING LIST"}</p>
          <h2>{tr ? "Klasik Makaleler" : "Classic Papers"}</h2>
          <p>
            {tr
              ? "Her kavramın matematiksel temeli. 1 sayfalık özet; orijinal makaleyi okumadan önce başlangıç noktası olarak kullan."
              : "Mathematical basis of each concept. 1-page summary; use as a starting point before reading the original paper."}
          </p>
        </div>
        <EvidencePill locale={locale} level="observed" />
      </div>
      <div className="papers-grid">
        {papers.map((paper) => (
          <article key={paper.id} className="paper-card">
            <span className="kicker">{paper.year} · {paper.authors}</span>
            <h3>{paper[locale].title}</h3>
            <div className="paper-section">
              <span className="kicker">{tr ? "ANA FİKİR" : "TAKEAWAY"}</span>
              <p>{paper[locale].takeaway}</p>
            </div>
            <div className="paper-section">
              <span className="kicker">{tr ? "NEDEN ÖNEMLİ" : "WHY IT MATTERS"}</span>
              <p>{paper[locale].relevance}</p>
            </div>
            <div className="paper-citation">
              <span className="kicker">{tr ? "ALıNTı" : "CITATION"}</span>
              <p><code>{paper[locale].citation}</code></p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CitationKitPanel({ locale }: { locale: Locale }) {
  const tr = locale === "tr";
  const cites = citationKit[locale];
  return (
    <section className="citation-kit">
      <div className="section-heading">
        <div>
          <p className="kicker">{tr ? "ALıNTı KİTİ" : "CITATION KIT"}</p>
          <h2>{tr ? "Tez ve Rapor için Cümleler" : "Sentences for Thesis and Reports"}</h2>
          <p>
            {tr
              ? "Doğrudan kullanılabilir, kanıt seviyesi etiketli cümleler. Üniversite ödevlerinde, tezlerde ve blog yazılarında atıf için."
              : "Drop-in, evidence-labeled sentences. Use in university assignments, theses, and blog posts with proper citation."}
          </p>
        </div>
      </div>
      <div className="citation-list">
        {cites.map((c) => (
          <article key={c.id} className="citation-item">
            <div className="citation-head">
              <EvidencePill locale={locale} level={c.evidence} />
              <span className="kicker">{c.topic}</span>
              <span className="kicker">{tr ? "kullanım:" : "usage:"} {c[locale].usage}</span>
            </div>
            <blockquote>{c[locale].text}</blockquote>
          </article>
        ))}
      </div>
    </section>
  );
}
