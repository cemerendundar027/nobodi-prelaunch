"use client";
import Link from "next/link";
import { ArrowIcon, FeatureIcon } from "@/components/icons";
import { LanguageSelector, useLanguage } from "@/components/language-selector";
import { Logo } from "@/components/logo";
import { WaitlistForm } from "@/components/waitlist-form";
import { translations } from "@/lib/i18n";

const featureMeta = [{ icon: "mask" as const, no: "01" }, { icon: "message" as const, no: "02" }, { icon: "people" as const, no: "03" }, { icon: "link" as const, no: "04" }];

export default function Home() {
  const { language } = useLanguage(); const t = translations[language];
  return <main>
    <div className="ambient ambient-one" aria-hidden="true" /><div className="ambient ambient-two" aria-hidden="true" />
    <nav className="nav shell" aria-label={t.navLabel}><Logo /><div className="origin-badge" aria-label="Made in Cyprus"><span className="origin-flag" aria-hidden="true"><span className="flag-image flag-cyprus" /></span><span>Made in Cyprus</span></div><div className="nav-actions"><LanguageSelector /><a className="nav-link" href="https://www.instagram.com/nobodi.chat.tr/" target="_blank" rel="noopener noreferrer">Instagram <ArrowIcon /></a></div></nav>
    <section className="hero shell" aria-labelledby="hero-title"><div className="eyebrow"><span /> {t.soon}</div><h1 id="hero-title">{t.heroLine1}<br />{t.heroLine2} <em>{t.heroAccent}</em></h1><p className="hero-copy">{t.heroCopy}</p><WaitlistForm /><div className="hero-foot" aria-hidden="true"><span>{t.heroFoot}</span><span className="scroll-line" /></div></section>
    <section className="features shell" aria-labelledby="features-title"><div className="section-head"><p className="kicker">{t.featuresKicker}</p><h2 id="features-title">{t.featuresTitle}<br /><span>{t.featuresAccent}</span></h2></div><div className="feature-grid">{t.features.map((feature, index) => <article className="feature-card" key={feature.title}><div className="card-top"><FeatureIcon type={featureMeta[index].icon} /><span>{featureMeta[index].no}</span></div><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div></section>
    <section className="story shell" aria-labelledby="story-title"><div className="story-mark" aria-hidden="true">n<span>.</span></div><div className="story-copy"><p className="kicker">{t.storyKicker}</p><h2 id="story-title">{t.storyLine1}<br />{t.storyLine2}</h2><p>{t.storyCopy}</p><a href="#waitlist">{t.join} <ArrowIcon /></a></div></section>
    <footer className="footer shell"><div className="footer-brand"><Logo linked={false} /><div><strong>NOBODI</strong><span>nobodi.chat</span></div></div><div className="footer-links"><a href="https://www.instagram.com/nobodi.chat.tr/" target="_blank" rel="noopener noreferrer">Instagram</a><Link href="/gizlilik">{t.privacy}</Link></div><p>© {new Date().getFullYear()} NOBODI. {t.copyright}</p></footer>
  </main>;
}
