import type { Locale } from "./config";

export type Dictionary = {
  metadata: { title: string; description: string };
  nav: { home: string; products: string; about: string; contact: string; catalog: string; menu: string };
  categories: { all: string; yatakSeti: string; yatak: string; baza: string; baslik: string };
  common: { collection: string; contact: string; backToProducts: string; material: string; dimensions: string; noProducts: string };
  hero: { eyebrow: string; titleFirst: string; titleSecond: string; description: string; explore: string; contact: string };
  home: { catalogEyebrow: string; catalogs: string; catalogDescription: string; reviewCatalog: string; featuredEyebrow: string; featured: string; quality: string; qualityTitle: string; material: string; craft: string; comfort: string; materialDescription: string; craftDescription: string; comfortDescription: string; ctaEyebrow: string; ctaTitleFirst: string; ctaTitleSecond: string; ctaDescription: string };
  about: { eyebrow: string; title: string; first: string; second: string; third: string; experience: string; customers: string; variety: string };
  contactPage: { eyebrow: string; title: string; showroom: string; phone: string; email: string; hours: string; weekdays: string; saturday: string; sunday: string; write: string; name: string; message: string; send: string };
  footer: { tagline: string; collection: string; contact: string; copyright: string };
  product: { details: string; whatsapp: string; whatsappAria: string; gallery: string; previous: string; next: string; image: string; unavailable: string };
};

const tr: Dictionary = {
  metadata: { title: "Yatex Bedding", description: "Yatex Bedding — Eviniz için premium yatak koleksiyonları." },
  nav: { home: "Ana Sayfa", products: "Ürünler", about: "Hakkımızda", contact: "İletişim", catalog: "2026 Katalog", menu: "Menüyü aç" },
  categories: { all: "Tümü", yatakSeti: "Yatak Seti", yatak: "Yatak", baza: "Baza", baslik: "Başlık" },
  common: { collection: "Koleksiyon", contact: "İletişim", backToProducts: "Ürünlere Dön", material: "Malzeme", dimensions: "Ölçüler", noProducts: "Henüz ürün eklenmedi." },
  hero: { eyebrow: "Premium Sleep", titleFirst: "Kaliteli uyku,", titleSecond: "kaliteli yatak.", description: "İyi uykunun tasarlandığı bir deneyim. Yatex Bedding olarak, size en iyi uyku deneyimini sunmak için özenle tasarlanmış koleksiyonumuzu sunuyoruz.", explore: "Koleksiyonu Keşfet", contact: "Bizimle İletişime Geç" },
  home: { catalogEyebrow: "Kataloğumuz", catalogs: "Kataloglarımız", catalogDescription: "YATEX koleksiyonlarını ve tasarımlarını kataloğumuzda keşfedin.", reviewCatalog: "Kataloğu İncele", featuredEyebrow: "Öne Çıkan", featured: "Öne Çıkan Modeller", quality: "Kalite", qualityTitle: "Kalitenin Arkasındaki Detaylar", material: "Malzeme", craft: "Zanaat", comfort: "Konfor", materialDescription: "En kaliteli doğal malzemeler", craftDescription: "Ustalıkla işlenen her detay", comfortDescription: "İyi uyku için tasarlanmış", ctaEyebrow: "İletişim", ctaTitleFirst: "Size uygun yatağı", ctaTitleSecond: "birlikte bulalım.", ctaDescription: "Ürünlerimiz hakkında detaylı bilgi ve size özel öneriler için bizimle iletişime geçin." },
  about: { eyebrow: "Hikayemiz", title: "Hakkımızda", first: "Yatex Bedding, kaliteli ve konforlu yataklar için tasarlanmış premium koleksiyonlarıyla hizmet verir. Her ürün, müşteri memnuniyetini ön planda tutan bir anlayışla üretilir.", second: "Showroomumuzda geniş ürün yelpazemizi sergiliyoruz. Uzman ekibimizle birlikte, ihtiyacınıza en uygun yatağı birlikte bulabiliriz.", third: "Amacımız, her müşterimize en iyi uyku deneyimini sunmak ve yataklarımızla evlerinize konfor katmak.", experience: "Yıllık Deneyim", customers: "Mutlu Müşteri", variety: "Ürün Çeşidi" },
  contactPage: { eyebrow: "Bize Ulaşın", title: "İletişim", showroom: "Showroom", phone: "Telefon", email: "E-posta", hours: "Çalışma Saatleri", weekdays: "Pazartesi – Cuma: 08:30 – 19:00", saturday: "Cumartesi: 08:30 – 15:00", sunday: "Pazar: Kapalı", write: "Bize Yazın", name: "Adınız", message: "Mesaj", send: "Gönder" },
  footer: { tagline: "İyi Uykunun Zarif Hali.", collection: "Koleksiyon", contact: "İletişim", copyright: "© 2026 Yatex Bedding. Tüm hakları saklıdır." },
  product: { details: "Detayları İncele", whatsapp: "WhatsApp ile Bilgi Al", whatsappAria: "{name} ürünü hakkında WhatsApp ile bilgi al", gallery: "{name} görsel galerisi", previous: "Önceki görsel", next: "Sonraki görsel", image: "Görsel", unavailable: "Görsel Yakında" },
};

const en: Dictionary = {
  ...tr,
  metadata: { title: "Yatex Bedding", description: "Yatex Bedding — Premium bedding collections for your home." },
  nav: { home: "Home", products: "Products", about: "About Us", contact: "Contact", catalog: "2026 Catalog", menu: "Open menu" },
  categories: { all: "All", yatakSeti: "Bed Set", yatak: "Mattress", baza: "Bed Base", baslik: "Headboard" },
  common: { collection: "Collection", contact: "Contact", backToProducts: "Back to Products", material: "Material", dimensions: "Dimensions", noProducts: "No products have been added yet." },
  hero: { eyebrow: "Premium Sleep", titleFirst: "Quality sleep,", titleSecond: "quality bedding.", description: "An experience designed for better sleep. At Yatex Bedding, we create considered collections to give you a better night’s rest.", explore: "Explore the Collection", contact: "Contact Us" },
  home: { catalogEyebrow: "Our Catalog", catalogs: "Our Catalogs", catalogDescription: "Explore YATEX collections and designs in our catalog.", reviewCatalog: "View the Catalog", featuredEyebrow: "Featured", featured: "Featured Models", quality: "Quality", qualityTitle: "The Details Behind Quality", material: "Materials", craft: "Craftsmanship", comfort: "Comfort", materialDescription: "The finest natural materials", craftDescription: "Every detail crafted with care", comfortDescription: "Designed for restorative sleep", ctaEyebrow: "Contact", ctaTitleFirst: "Let’s find the bed", ctaTitleSecond: "that is right for you.", ctaDescription: "Contact us for detailed information and recommendations tailored to you." },
  about: { eyebrow: "Our Story", title: "About Us", first: "Yatex Bedding offers premium collections designed for quality sleep and lasting comfort. Every product is made with a customer-first approach.", second: "Our showroom presents a broad collection. Our expert team can help you find the bed that suits your needs.", third: "Our purpose is to offer every customer a better sleep experience and bring comfort to their home.", experience: "Years of Experience", customers: "Happy Customers", variety: "Product Range" },
  contactPage: { eyebrow: "Reach Us", title: "Contact", showroom: "Showroom", phone: "Phone", email: "Email", hours: "Opening Hours", weekdays: "Monday – Friday: 08:30 – 19:00", saturday: "Saturday: 08:30 – 15:00", sunday: "Sunday: Closed", write: "Write to Us", name: "Your Name", message: "Message", send: "Send" },
  footer: { tagline: "The Elegant Side of Better Sleep.", collection: "Collection", contact: "Contact", copyright: "© 2026 Yatex Bedding. All rights reserved." },
  product: { details: "View Details", whatsapp: "Get Info on WhatsApp", whatsappAria: "Get information about {name} on WhatsApp", gallery: "{name} image gallery", previous: "Previous image", next: "Next image", image: "Image", unavailable: "Image coming soon" },
};

const ar: Dictionary = {
  ...en,
  metadata: { title: "ياتكس للمفروشات", description: "ياتكس للمفروشات — مجموعات نوم فاخرة لمنزلك." },
  nav: { home: "الرئيسية", products: "المنتجات", about: "من نحن", contact: "اتصل بنا", catalog: "كتالوج 2026", menu: "فتح القائمة" },
  categories: { all: "الكل", yatakSeti: "طقم سرير", yatak: "مرتبة", baza: "قاعدة سرير", baslik: "لوح رأس السرير" },
  common: { collection: "المجموعات", contact: "اتصل بنا", backToProducts: "العودة إلى المنتجات", material: "الخامة", dimensions: "الأبعاد", noProducts: "لم تتم إضافة منتجات بعد." },
  hero: { eyebrow: "نوم فاخر", titleFirst: "نوم بجودة عالية،", titleSecond: "وفراش بجودة عالية.", description: "تجربة صُممت لنوم أفضل. في ياتكس للمفروشات، نصمم مجموعات بعناية لنمنحك راحة مثالية كل ليلة.", explore: "استكشف المجموعة", contact: "تواصل معنا" },
  home: { catalogEyebrow: "كتالوجنا", catalogs: "كتالوجاتنا", catalogDescription: "اكتشف مجموعات وتصاميم ياتكس في كتالوجنا.", reviewCatalog: "استعرض الكتالوج", featuredEyebrow: "مختارات", featured: "الموديلات المميزة", quality: "الجودة", qualityTitle: "التفاصيل وراء الجودة", material: "الخامات", craft: "الحرفية", comfort: "الراحة", materialDescription: "أجود الخامات الطبيعية", craftDescription: "كل تفصيل مصنوع بعناية", comfortDescription: "مصمم لنوم متجدد", ctaEyebrow: "اتصل بنا", ctaTitleFirst: "لنجد السرير", ctaTitleSecond: "المناسب لك.", ctaDescription: "تواصل معنا للحصول على معلومات تفصيلية وتوصيات تناسبك." },
  about: { eyebrow: "قصتنا", title: "من نحن", first: "تقدم ياتكس للمفروشات مجموعات فاخرة مصممة للنوم المريح والجودة الدائمة. كل منتج يصنع بمنهج يضع العميل أولاً.", second: "يعرض معرضنا تشكيلة واسعة، ويساعدك فريقنا الخبير على اختيار السرير المناسب لاحتياجاتك.", third: "هدفنا أن نقدم لكل عميل تجربة نوم أفضل ونضيف الراحة إلى منزله.", experience: "عاماً من الخبرة", customers: "عملاء سعداء", variety: "تنوع المنتجات" },
  contactPage: { eyebrow: "تواصل معنا", title: "اتصل بنا", showroom: "المعرض", phone: "الهاتف", email: "البريد الإلكتروني", hours: "ساعات العمل", weekdays: "الاثنين – الجمعة: 08:30 – 19:00", saturday: "السبت: 08:30 – 15:00", sunday: "الأحد: مغلق", write: "راسلنا", name: "الاسم", message: "الرسالة", send: "إرسال" },
  footer: { tagline: "الوجه الأنيق للنوم الهانئ.", collection: "المجموعات", contact: "اتصل بنا", copyright: "© 2026 ياتكس للمفروشات. جميع الحقوق محفوظة." },
  product: { details: "عرض التفاصيل", whatsapp: "اطلب المعلومات عبر واتساب", whatsappAria: "اطلب معلومات عن {name} عبر واتساب", gallery: "معرض صور {name}", previous: "الصورة السابقة", next: "الصورة التالية", image: "صورة", unavailable: "الصورة قريباً" },
};

export const dictionaries: Record<Locale, Dictionary> = { tr, en, ar };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
