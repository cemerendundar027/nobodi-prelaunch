export const languages = ["tr", "en", "el"] as const;
export type Language = (typeof languages)[number];

export const languageOptions: Array<{ code: Language; label: string; flag: string }> = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "el", label: "Ελληνικά", flag: "🇬🇷" },
];

const tr = {
  navLabel: "Ana navigasyon",
  soon: "Çok yakında.",
  heroLine1: "Kim olduğunu",
  heroLine2: "söylemeden",
  heroAccent: "konuş.",
  heroCopy: "Bazen insanın sadece konuşası gelir ya… NOBODI tam da bunun için geliyor. Anonim mesajlar, yeni insanlar, gerçek sohbetler.",
  heroFoot: "Anonim. Gerçek. Sen.",
  featuresKicker: "NOBODI NEDİR?",
  featuresTitle: "Olduğun gibi.",
  featuresAccent: "Adın olmadan.",
  features: [
    { title: "İsimsiz konuş.", text: "Kendin gibi ol. İsmini açıklamadan içinden geleni söyle." },
    { title: "Anonim mesaj al.", text: "Sana söylenemeyenleri, kim olduğunu bilmeden keşfet." },
    { title: "Yeni insanlarla tanış.", text: "Beklenmedik sohbetlere açık ol. Bazen bir cümle yeter." },
    { title: "Kendi linkini paylaş.", text: "Tek bir link. Hikâyene, profiline ya da istediğin yere bırak." },
  ],
  storyKicker: "HİKÂYEMİZ",
  storyLine1: "Bir fikirle",
  storyLine2: "başladık.",
  storyCopy: "Henüz yolun başındayız. Bu siteyi büyük hayallerle geliştiriyoruz. İlk günden burada olanları unutmayacağız. 🖤",
  join: "Aramıza katıl",
  privacy: "Gizlilik",
  copyright: "Tüm hakları saklıdır.",
  form: {
    label: "E-posta adresin", placeholder: "E-posta adresin", submit: "İlk gelenlerden ol 👀", loading: "Gönderiliyor…", submitted: "Listedesin",
    note: "Açıldığımızda sana haber verelim. Spam yok, söz. 🖤", success: "İlk gelenlerden oldun. Açıldığımızda haber vereceğiz 🖤",
    error: "Bir şey ters gitti. Bir daha dener misin?", invalid: "Geçerli bir e-posta adresi yazar mısın?", config: "Form henüz yapılandırılmadı. Site sahibi Formspree endpoint’ini eklemeli.", aria: "NOBODI erken erişim formu", honeypot: "Şirket",
  },
  legal: {
    back: "Ana sayfaya dön", kicker: "GİZLİLİK", title: "Verin, senin.", updated: "Son güncelleme: 15 Ekim 2026",
    sections: [
      ["Hangi veriyi topluyoruz?", "Erken erişim listesine katıldığında yalnızca e-posta adresini ve bağlantıda bulunan kampanya parametrelerini (UTM) toplarız. Hesap, parola veya başka bir profil bilgisi istemeyiz."],
      ["Neden topluyoruz?", "E-posta adresini NOBODI açıldığında haber vermek ve erken erişim süreciyle ilgili gerekli bilgilendirmeleri yapmak için kullanırız. Ayrı bir pazarlama izni verdiğini varsaymayız."],
      ["Formspree", "Form gönderimleri üçüncü taraf form hizmeti Formspree tarafından işlenir. Bu nedenle e-posta adresin Formspree altyapısına aktarılır ve onların güvenlik ve saklama uygulamalarına tabi olabilir."],
      ["Hakların", "Kaydının silinmesini, düzeltilmesini veya hangi verinin tutulduğunu öğrenmeyi talep edebilirsin. Bu metin, yürürlükteki mevzuat kapsamındaki haklarını sınırlamaz."],
      ["İletişim", "Gizlilikle ilgili soruların için Instagram hesabımızdan bize ulaşabilirsin."],
    ],
    policy: "Formspree Gizlilik Politikası",
  },
};

export type Translation = typeof tr;

const en: Translation = {
  ...tr,
  navLabel: "Main navigation", soon: "Coming soon.", heroLine1: "Talk without", heroLine2: "saying who", heroAccent: "you are.",
  heroCopy: "Sometimes you just need to talk… That’s exactly why NOBODI is coming. Anonymous messages, new people, real conversations.", heroFoot: "Anonymous. Real. You.",
  featuresKicker: "WHAT IS NOBODI?", featuresTitle: "Just as you are.", featuresAccent: "Without your name.",
  features: [
    { title: "Talk anonymously.", text: "Be yourself. Say what you feel without revealing your name." },
    { title: "Receive anonymous messages.", text: "Discover what people want to tell you without knowing who they are." },
    { title: "Meet new people.", text: "Stay open to unexpected conversations. Sometimes one sentence is enough." },
    { title: "Share your own link.", text: "One simple link. Add it to your story, profile, or anywhere you like." },
  ],
  storyKicker: "OUR STORY", storyLine1: "It started with", storyLine2: "an idea.", storyCopy: "We’re only at the beginning. We’re building this with big dreams. We won’t forget those who were here from day one. 🖤", join: "Join us", privacy: "Privacy", copyright: "All rights reserved.",
  form: { label: "Your email address", placeholder: "Your email address", submit: "Be one of the first 👀", loading: "Sending…", submitted: "You’re on the list", note: "We’ll let you know when we launch. No spam, promise. 🖤", success: "You’re one of the first. We’ll let you know when we launch 🖤", error: "Something went wrong. Could you try again?", invalid: "Please enter a valid email address.", config: "The form isn’t configured yet. The site owner needs to add the Formspree endpoint.", aria: "NOBODI early access form", honeypot: "Company" },
  legal: { back: "Back to home", kicker: "PRIVACY", title: "Your data, yours.", updated: "Last updated: October 15, 2026", sections: [
    ["What do we collect?", "When you join the early access list, we collect only your email address and campaign parameters (UTM) included in the link. We don’t ask for an account, password, or other profile information."],
    ["Why do we collect it?", "We use your email address to let you know when NOBODI launches and to send essential early-access updates. We don’t assume permission for separate marketing activities."],
    ["Formspree", "Form submissions are processed by the third-party form service Formspree. Your email address is therefore transferred to Formspree’s infrastructure and may be subject to its security and retention practices."],
    ["Your rights", "You can request deletion or correction of your record, or ask what data is held. This notice does not limit your rights under applicable law."],
    ["Contact", "For privacy questions, you can reach us through our Instagram account."],
  ], policy: "Formspree Privacy Policy" },
};

const el: Translation = {
  ...tr,
  navLabel: "Κύρια πλοήγηση", soon: "Σύντομα κοντά σου.", heroLine1: "Μίλα χωρίς", heroLine2: "να πεις ποιος", heroAccent: "είσαι.",
  heroCopy: "Μερικές φορές θέλεις απλώς να μιλήσεις… Γι’ αυτό ακριβώς έρχεται το NOBODI. Ανώνυμα μηνύματα, νέοι άνθρωποι, αληθινές συζητήσεις.", heroFoot: "Ανώνυμα. Αληθινά. Εσύ.",
  featuresKicker: "ΤΙ ΕΙΝΑΙ ΤΟ NOBODI;", featuresTitle: "Όπως ακριβώς είσαι.", featuresAccent: "Χωρίς το όνομά σου.",
  features: [
    { title: "Μίλα ανώνυμα.", text: "Να είσαι ο εαυτός σου. Πες ό,τι νιώθεις χωρίς να αποκαλύψεις το όνομά σου." },
    { title: "Λάβε ανώνυμα μηνύματα.", text: "Ανακάλυψε όσα θέλουν να σου πουν, χωρίς να ξέρεις ποιος τα έστειλε." },
    { title: "Γνώρισε νέους ανθρώπους.", text: "Μείνε ανοιχτός σε απρόσμενες συζητήσεις. Μερικές φορές μία φράση αρκεί." },
    { title: "Μοιράσου τον σύνδεσμό σου.", text: "Ένας απλός σύνδεσμος. Βάλ’ τον στο story, στο προφίλ ή όπου θέλεις." },
  ],
  storyKicker: "Η ΙΣΤΟΡΙΑ ΜΑΣ", storyLine1: "Ξεκινήσαμε με", storyLine2: "μια ιδέα.", storyCopy: "Είμαστε ακόμη στην αρχή. Χτίζουμε αυτή την ιδέα με μεγάλα όνειρα. Δεν θα ξεχάσουμε όσους ήταν εδώ από την πρώτη μέρα. 🖤", join: "Έλα μαζί μας", privacy: "Απόρρητο", copyright: "Με επιφύλαξη παντός δικαιώματος.",
  form: { label: "Η διεύθυνση email σου", placeholder: "Η διεύθυνση email σου", submit: "Γίνε από τους πρώτους 👀", loading: "Αποστολή…", submitted: "Είσαι στη λίστα", note: "Θα σε ενημερώσουμε όταν ξεκινήσουμε. Χωρίς spam, υπόσχεση. 🖤", success: "Είσαι από τους πρώτους. Θα σε ενημερώσουμε όταν ξεκινήσουμε 🖤", error: "Κάτι πήγε στραβά. Θέλεις να δοκιμάσεις ξανά;", invalid: "Γράψε μια έγκυρη διεύθυνση email.", config: "Η φόρμα δεν έχει ρυθμιστεί ακόμη. Ο ιδιοκτήτης πρέπει να προσθέσει το Formspree endpoint.", aria: "Φόρμα πρώιμης πρόσβασης NOBODI", honeypot: "Εταιρεία" },
  legal: { back: "Επιστροφή στην αρχική", kicker: "ΑΠΟΡΡΗΤΟ", title: "Τα δεδομένα σου, δικά σου.", updated: "Τελευταία ενημέρωση: 15 Οκτωβρίου 2026", sections: [
    ["Ποια δεδομένα συλλέγουμε;", "Όταν μπαίνεις στη λίστα πρώιμης πρόσβασης, συλλέγουμε μόνο τη διεύθυνση email σου και τις παραμέτρους καμπάνιας (UTM) του συνδέσμου. Δεν ζητάμε λογαριασμό, κωδικό ή άλλα στοιχεία προφίλ."],
    ["Γιατί τα συλλέγουμε;", "Χρησιμοποιούμε το email σου για να σε ενημερώσουμε όταν ξεκινήσει το NOBODI και για απαραίτητες ενημερώσεις πρώιμης πρόσβασης. Δεν θεωρούμε ότι έχεις δώσει άδεια για ξεχωριστές ενέργειες μάρκετινγκ."],
    ["Formspree", "Οι υποβολές της φόρμας επεξεργάζονται από την τρίτη υπηρεσία Formspree. Έτσι, το email σου μεταφέρεται στην υποδομή της Formspree και μπορεί να υπόκειται στις πρακτικές ασφάλειας και διατήρησής της."],
    ["Τα δικαιώματά σου", "Μπορείς να ζητήσεις διαγραφή ή διόρθωση της εγγραφής σου ή να μάθεις ποια δεδομένα διατηρούνται. Η ενημέρωση αυτή δεν περιορίζει τα δικαιώματά σου βάσει της ισχύουσας νομοθεσίας."],
    ["Επικοινωνία", "Για θέματα απορρήτου, μπορείς να επικοινωνήσεις μαζί μας μέσω του λογαριασμού μας στο Instagram."],
  ], policy: "Πολιτική Απορρήτου της Formspree" },
};

export const translations: Record<Language, Translation> = { tr, en, el };
