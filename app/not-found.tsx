import Link from "next/link";

export default function NotFound() {
  return <main className="locale-gateway"><p className="eyebrow">404</p><h1>Route not found</h1><p>Rota bulunamadı · The requested atlas route does not exist.</p><div className="gateway-actions"><Link href="/tr/">Türkçe</Link><Link href="/en/">English</Link></div></main>;
}
