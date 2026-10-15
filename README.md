# NOBODI Pre-launch

NOBODI iÃ§in baÄŸÄ±msÄ±z, statik olarak daÄŸÄ±tÄ±labilen Next.js pre-launch sitesi.

## Kurulum

Node.js 20.9 veya Ã¼zeri gerekir.

```bash
npm install
copy .env.example .env.local
npm run dev
```

TarayÄ±cÄ±da `http://localhost:3000` adresini aÃ§Ä±n.

## Formspree

Formspree'de bir form oluÅŸturun ve `.env.local` iÃ§ine HTTPS endpoint'inizi yazÄ±n:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

DeÄŸiÅŸken tanÄ±mlÄ± veya geÃ§erli deÄŸilse form devre dÄ±ÅŸÄ± kalÄ±r ve yapÄ±landÄ±rma uyarÄ±sÄ± gÃ¶sterir. Form; e-posta, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` ve botlar iÃ§in `_gotcha` alanÄ±nÄ± gÃ¶nderir. BaÅŸarÄ± yalnÄ±zca Formspree baÅŸarÄ±lÄ± HTTP yanÄ±tÄ± verdikten sonra gÃ¶sterilir. AynÄ± e-postanÄ±n benzersizliÄŸi hakkÄ±nda garanti verilmez.

15 Ekim 2026 itibarÄ±yla Formspree Free planÄ± ayda 50 gÃ¶nderim ve 30 gÃ¼nlÃ¼k gÃ¶nderim arÅŸivi sunar; temel spam filtresi vardÄ±r. Limit aÅŸÄ±lÄ±rsa Formspree hata dÃ¶ndÃ¼rebilir ve arayÃ¼z bunu baÅŸarÄ± olarak gÃ¶stermez. `_gotcha` honeypot alanÄ± bot gÃ¶nderimlerini azaltÄ±r, ancak kesin koruma saÄŸlamaz. Planlar ve sÄ±nÄ±rlar deÄŸiÅŸebileceÄŸi iÃ§in daÄŸÄ±tÄ±mdan Ã¶nce [Formspree planlar](https://formspree.io/plans), [hesap limitleri](https://help.formspree.io/articles/account-management/account-limits/) ve [honeypot](https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering/) belgelerini kontrol edin. GÃ¶nderimler Ã¼Ã§Ã¼ncÃ¼ taraf Formspree tarafÄ±ndan iÅŸlenir; bu durum `/gizlilik` sayfasÄ±nda aÃ§Ä±klanÄ±r.

Form yalnÄ±zca kullanÄ±cÄ±nÄ±n talep ettiÄŸi aÃ§Ä±lÄ±ÅŸ/erken eriÅŸim bildirimini gÃ¶nderir; ayrÄ± pazarlama faaliyetleri iÃ§in izin varsaymaz. Bu nedenle fazladan bir pazarlama onay kutusu eklenmemiÅŸtir. KullanÄ±m amacÄ± geniÅŸletilirse yerel mevzuata gÃ¶re ayrÄ±ca aÃ§Ä±k rÄ±za/izin akÄ±ÅŸÄ± deÄŸerlendirilmelidir.

## Kontroller

```bash
npm run test
npm run lint
npm run typecheck
npm run build
```

Statik Ã§Ä±ktÄ± `out/` klasÃ¶rÃ¼ne yazÄ±lÄ±r.

## DaÄŸÄ±tÄ±m

- **Vercel:** GitHub reposunu iÃ§e aktarÄ±n. Framework Preset `Next.js` olarak otomatik algÄ±lanÄ±r; ayrÄ±ca `vercel.json` gerekmez. Project Settings â†’ Environment Variables alanÄ±na `NEXT_PUBLIC_FORMSPREE_ENDPOINT` deÄŸerini Production ve isteniyorsa Preview ortamlarÄ± iÃ§in ekleyin. Build komutu ve Ã§Ä±ktÄ± klasÃ¶rÃ¼ ayarlarÄ±nÄ± Vercel varsayÄ±lanÄ±nda bÄ±rakÄ±n.
- **Netlify / Cloudflare Pages:** Build komutu `npm run build`, Ã§Ä±ktÄ± klasÃ¶rÃ¼ `out` olmalÄ±dÄ±r. Ortam deÄŸiÅŸkenini panelden ekleyin.
- **Statik hosting:** `npm run build` sonrasÄ± `out/` iÃ§eriÄŸini yÃ¼kleyin.

Bu proje backend, veritabanÄ± veya kimlik doÄŸrulama sistemi kullanmaz.

