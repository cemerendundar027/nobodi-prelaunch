"use client";
import Link from "next/link";
import { LanguageSelector, useLanguage } from "@/components/language-selector";
import { Logo } from "@/components/logo";
import { translations } from "@/lib/i18n";

export default function PrivacyPage() {
  const { language } = useLanguage(); const t = translations[language].legal;
  return <main className="legal-page shell">
    <nav className="nav"><Logo /><div className="nav-actions"><LanguageSelector /><Link className="back-link" href="/">{t.back}</Link></div></nav>
    <article><p className="kicker">{t.kicker}</p><h1>{t.title}</h1><p className="legal-date">{t.updated}</p>
      {t.sections.map(([title, body], index) => <section key={title}><h2>{title}</h2><p>{body}{index === 2 && <> <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">{t.policy}</a>.</>}</p></section>)}
    </article>
  </main>;
}
