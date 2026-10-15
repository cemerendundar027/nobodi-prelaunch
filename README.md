# NOBODI Pre-launch

NOBODI için bağımsız, statik olarak dağıtılabilen Next.js pre-launch sitesi.

## Kurulum

Node.js 20.9 veya üzeri gerekir.

```bash
npm install
copy .env.example .env.local
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Formspree

Formspree'de bir form oluşturun ve `.env.local` içine HTTPS endpoint'inizi yazın:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

Değişken tanımlı veya geçerli değilse form devre dışı kalır ve yapılandırma uyarısı gösterir. Form; e-posta, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` ve botlar için `_gotcha` alanını gönderir. Başarı yalnızca Formspree başarılı HTTP yanıtı verdikten sonra gösterilir. Aynı e-postanın benzersizliği hakkında garanti verilmez.

15 Ekim 2026 itibarıyla Formspree Free planı ayda 50 gönderim ve 30 günlük gönderim arşivi sunar; temel spam filtresi vardır. Limit aşılırsa Formspree hata döndürebilir ve arayüz bunu başarı olarak göstermez. `_gotcha` honeypot alanı bot gönderimlerini azaltır, ancak kesin koruma sağlamaz. Planlar ve sınırlar değişebileceği için dağıtımdan önce [Formspree planlar](https://formspree.io/plans), [hesap limitleri](https://help.formspree.io/articles/account-management/account-limits/) ve [honeypot](https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering/) belgelerini kontrol edin. Gönderimler üçüncü taraf Formspree tarafından işlenir; bu durum `/gizlilik` sayfasında açıklanır.

Form yalnızca kullanıcının talep ettiği açılış/erken erişim bildirimini gönderir; ayrı pazarlama faaliyetleri için izin varsaymaz. Bu nedenle fazladan bir pazarlama onay kutusu eklenmemiştir. Kullanım amacı genişletilirse yerel mevzuata göre ayrıca açık rıza/izin akışı değerlendirilmelidir.

## Kontroller

```bash
npm run test
npm run lint
npm run typecheck
npm run build
```

Statik çıktı `out/` klasörüne yazılır.

## Dağıtım

- **Vercel:** GitHub reposunu içe aktarın. Framework Preset `Next.js` olarak otomatik algılanır; ayrıca `vercel.json` gerekmez. Project Settings → Environment Variables alanına `NEXT_PUBLIC_FORMSPREE_ENDPOINT` değerini Production ve isteniyorsa Preview ortamları için ekleyin. Build komutu ve çıktı klasörü ayarlarını Vercel varsayılanında bırakın.
- **Netlify / Cloudflare Pages:** Build komutu `npm run build`, çıktı klasörü `out` olmalıdır. Ortam değişkenini panelden ekleyin.
- **Statik hosting:** `npm run build` sonrası `out/` içeriğini yükleyin.

Bu proje backend, veritabanı veya kimlik doğrulama sistemi kullanmaz.
