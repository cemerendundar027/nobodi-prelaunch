import Link from "next/link";
import { Logo } from "@/components/logo";

export default function PrivacyPage() {
  return <main className="legal-page shell">
    <nav className="nav"><Logo /><Link className="back-link" href="/">Ana sayfaya dön</Link></nav>
    <article>
      <p className="kicker">GİZLİLİK</p><h1>Verin, senin.</h1><p className="legal-date">Son güncelleme: 15 Ekim 2026</p>
      <h2>Hangi veriyi topluyoruz?</h2><p>Erken erişim listesine katıldığında yalnızca e-posta adresini ve bağlantıda bulunan kampanya parametrelerini (UTM) toplarız. Hesap, parola veya başka bir profil bilgisi istemeyiz.</p>
      <h2>Neden topluyoruz?</h2><p>E-posta adresini NOBODI açıldığında haber vermek ve erken erişim süreciyle ilgili gerekli bilgilendirmeleri yapmak için kullanırız. Ayrı bir pazarlama izni verdiğini varsaymayız.</p>
      <h2>Formspree</h2><p>Form gönderimleri üçüncü taraf form hizmeti Formspree tarafından işlenir. Bu nedenle e-posta adresin Formspree altyapısına aktarılır ve onların güvenlik ve saklama uygulamalarına tabi olabilir. Ayrıntılar için <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Formspree Gizlilik Politikası</a>nı inceleyebilirsin.</p>
      <h2>Hakların</h2><p>Kaydının silinmesini, düzeltilmesini veya hangi verinin tutulduğunu öğrenmeyi talep edebilirsin. Bu metin, yürürlükteki mevzuat kapsamındaki haklarını sınırlamaz.</p>
      <h2>İletişim</h2><p>Gizlilikle ilgili soruların için <a href="https://www.instagram.com/nobodi.chat.tr/" target="_blank" rel="noopener noreferrer">Instagram hesabımızdan</a> bize ulaşabilirsin.</p>
    </article>
  </main>;
}
