import Link from "next/link";
import { ArrowIcon, FeatureIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { WaitlistForm } from "@/components/waitlist-form";
const features = [
  { title: "Ä°simsiz konuÅŸ.", text: "Kendin gibi ol. Ä°smini aÃ§Ä±klamadan iÃ§inden geleni sÃ¶yle.", icon: "mask" as const, no: "01" },
  { title: "Anonim mesaj al.", text: "Sana sÃ¶ylenemeyenleri, kim olduÄŸunu bilmeden keÅŸfet.", icon: "message" as const, no: "02" },
  { title: "Yeni insanlarla tanÄ±ÅŸ.", text: "Beklenmedik sohbetlere aÃ§Ä±k ol. Bazen bir cÃ¼mle yeter.", icon: "people" as const, no: "03" },
  { title: "Kendi linkini paylaÅŸ.", text: "Tek bir link. HikÃ¢yene, profiline ya da istediÄŸin yere bÄ±rak.", icon: "link" as const, no: "04" },
];
export default function Home() { return <main>
  <div className="ambient ambient-one" aria-hidden="true" /><div className="ambient ambient-two" aria-hidden="true" />
  <nav className="nav shell" aria-label="Ana navigasyon"><Logo /><a className="nav-link" href="https://www.instagram.com/nobodi.chat.tr/" target="_blank" rel="noopener noreferrer">Instagram <ArrowIcon /></a></nav>
  <section className="hero shell" aria-labelledby="hero-title"><div className="eyebrow"><span /> Ã‡ok yakÄ±nda.</div><h1 id="hero-title">Kim olduÄŸunu<br />sÃ¶ylemeden <em>konuÅŸ.</em></h1><p className="hero-copy">Bazen insanÄ±n sadece konuÅŸasÄ± gelir yaâ€¦ NOBODI tam da bunun iÃ§in geliyor. Anonim mesajlar, yeni insanlar, gerÃ§ek sohbetler.</p><WaitlistForm /><div className="hero-foot" aria-hidden="true"><span>Anonim. GerÃ§ek. Sen.</span><span className="scroll-line" /></div></section>
  <section className="features shell" aria-labelledby="features-title"><div className="section-head"><p className="kicker">NOBODI NEDÄ°R?</p><h2 id="features-title">OlduÄŸun gibi.<br /><span>AdÄ±n olmadan.</span></h2></div><div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.title}><div className="card-top"><FeatureIcon type={feature.icon} /><span>{feature.no}</span></div><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div></section>
  <section className="story shell" aria-labelledby="story-title"><div className="story-mark" aria-hidden="true">n<span>.</span></div><div className="story-copy"><p className="kicker">HÄ°KÃ‚YEMÄ°Z</p><h2 id="story-title">Bir fikirle<br />baÅŸladÄ±k.</h2><p>HenÃ¼z yolun baÅŸÄ±ndayÄ±z. Bu siteyi bÃ¼yÃ¼k hayallerle geliÅŸtiriyoruz. Ä°lk gÃ¼nden burada olanlarÄ± unutmayacaÄŸÄ±z. ðŸ–¤</p><a href="#waitlist">AramÄ±za katÄ±l <ArrowIcon /></a></div></section>
  <footer className="footer shell"><div className="footer-brand"><Logo linked={false} /><div><strong>NOBODI</strong><span>nobodi.chat</span></div></div><div className="footer-links"><a href="https://www.instagram.com/nobodi.chat.tr/" target="_blank" rel="noopener noreferrer">Instagram</a><Link href="/gizlilik">Gizlilik</Link></div><p>Â© {new Date().getFullYear()} NOBODI. TÃ¼m haklarÄ± saklÄ±dÄ±r.</p></footer>
  </main>; }

