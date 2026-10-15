import Link from "next/link";
import { Logo } from "@/components/logo";

export default function PrivacyPage() {
  return <main className="legal-page shell">
    <nav className="nav"><Logo /><Link className="back-link" href="/">Ana sayfaya dÃ¶n</Link></nav>
    <article>
      <p className="kicker">GÄ°ZLÄ°LÄ°K</p><h1>Verin, senin.</h1><p className="legal-date">Son gÃ¼ncelleme: 15 Ekim 2026</p>
      <h2>Hangi veriyi topluyoruz?</h2><p>Erken eriÅŸim listesine katÄ±ldÄ±ÄŸÄ±nda yalnÄ±zca e-posta adresini ve baÄŸlantÄ±da bulunan kampanya parametrelerini (UTM) toplarÄ±z. Hesap, parola veya baÅŸka bir profil bilgisi istemeyiz.</p>
      <h2>Neden topluyoruz?</h2><p>E-posta adresini NOBODI aÃ§Ä±ldÄ±ÄŸÄ±nda haber vermek ve erken eriÅŸim sÃ¼reciyle ilgili gerekli bilgilendirmeleri yapmak iÃ§in kullanÄ±rÄ±z. AyrÄ± bir pazarlama izni verdiÄŸini varsaymayÄ±z.</p>
      <h2>Formspree</h2><p>Form gÃ¶nderimleri Ã¼Ã§Ã¼ncÃ¼ taraf form hizmeti Formspree tarafÄ±ndan iÅŸlenir. Bu nedenle e-posta adresin Formspree altyapÄ±sÄ±na aktarÄ±lÄ±r ve onlarÄ±n gÃ¼venlik ve saklama uygulamalarÄ±na tabi olabilir. AyrÄ±ntÄ±lar iÃ§in <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Formspree Gizlilik PolitikasÄ±</a>nÄ± inceleyebilirsin.</p>
      <h2>HaklarÄ±n</h2><p>KaydÄ±nÄ±n silinmesini, dÃ¼zeltilmesini veya hangi verinin tutulduÄŸunu Ã¶ÄŸrenmeyi talep edebilirsin. Bu metin, yÃ¼rÃ¼rlÃ¼kteki mevzuat kapsamÄ±ndaki haklarÄ±nÄ± sÄ±nÄ±rlamaz.</p>
      <h2>Ä°letiÅŸim</h2><p>Gizlilikle ilgili sorularÄ±n iÃ§in <a href="https://www.instagram.com/nobodi.chat.tr/" target="_blank" rel="noopener noreferrer">Instagram hesabÄ±mÄ±zdan</a> bize ulaÅŸabilirsin.</p>
    </article>
  </main>;
}

