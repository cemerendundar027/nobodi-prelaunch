import Link from "next/link";
import { ArrowIcon, FeatureIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { WaitlistForm } from "@/components/waitlist-form";
const features = [
  { title: "İsimsiz konuş.", text: "Kendin gibi ol. İsmini açıklamadan içinden geleni söyle.", icon: "mask" as const, no: "01" },
  { title: "Anonim mesaj al.", text: "Sana söylenemeyenleri, kim olduğunu bilmeden keşfet.", icon: "message" as const, no: "02" },
  { title: "Yeni insanlarla tanış.", text: "Beklenmedik sohbetlere açık ol. Bazen bir cümle yeter.", icon: "people" as const, no: "03" },
  { title: "Kendi linkini paylaş.", text: "Tek bir link. Hikâyene, profiline ya da istediğin yere bırak.", icon: "link" as const, no: "04" },
];
export default function Home() { return <main>
  <div className="ambient ambient-one" aria-hidden="true" /><div className="ambient ambient-two" aria-hidden="true" />
  <nav className="nav shell" aria-label="Ana navigasyon"><Logo /><a className="nav-link" href="https://www.instagram.com/nobodi.chat.tr/" target="_blank" rel="noopener noreferrer">Instagram <ArrowIcon /></a></nav>
  <section className="hero shell" aria-labelledby="hero-title"><div className="eyebrow"><span /> Çok yakında.</div><h1 id="hero-title">Kim olduğunu<br />söylemeden <em>konuş.</em></h1><p className="hero-copy">Bazen insanın sadece konuşası gelir ya… NOBODI tam da bunun için geliyor. Anonim mesajlar, yeni insanlar, gerçek sohbetler.</p><WaitlistForm /><div className="hero-foot" aria-hidden="true"><span>Anonim. Gerçek. Sen.</span><span className="scroll-line" /></div></section>
  <section className="features shell" aria-labelledby="features-title"><div className="section-head"><p className="kicker">NOBODI NEDİR?</p><h2 id="features-title">Olduğun gibi.<br /><span>Adın olmadan.</span></h2></div><div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.title}><div className="card-top"><FeatureIcon type={feature.icon} /><span>{feature.no}</span></div><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div></section>
  <section className="story shell" aria-labelledby="story-title"><div className="story-mark" aria-hidden="true">n<span>.</span></div><div className="story-copy"><p className="kicker">HİKÂYEMİZ</p><h2 id="story-title">Bir fikirle<br />başladık.</h2><p>Henüz yolun başındayız. Bu siteyi büyük hayallerle geliştiriyoruz. İlk günden burada olanları unutmayacağız. 🖤</p><a href="#waitlist">Aramıza katıl <ArrowIcon /></a></div></section>
  <footer className="footer shell"><div className="footer-brand"><Logo linked={false} /><div><strong>NOBODI</strong><span>nobodi.chat</span></div></div><div className="footer-links"><a href="https://www.instagram.com/nobodi.chat.tr/" target="_blank" rel="noopener noreferrer">Instagram</a><Link href="/gizlilik">Gizlilik</Link></div><p>© {new Date().getFullYear()} NOBODI. Tüm hakları saklıdır.</p></footer>
  </main>; }
