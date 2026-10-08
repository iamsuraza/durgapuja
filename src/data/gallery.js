/**
 * श्री जय दुर्गा पूजा सेवा समिति - फोटो ग्यालरी विवरण
 * 
 * नयाँ फोटो थप्न:
 * १. फोटो फाइललाई `public/images/gallery/` फोल्डरमा राख्नुहोस् (उदा: puja-1.jpg)
 * २. तलको `galleryImages` सूचीमा नयाँ वस्तु (item) थप्नुहोस् वा रहेको सम्पादन गर्नुहोस्:
 *    {
 *      id: 1,
 *      image: "/images/gallery/puja-1.jpg",
 *      title: "महाआरती तथा पूजा",
 *      category: "आरती",
 *      date: "२०८१ असोज",
 *      description: "श्रद्धालु भक्तजनहरूको उपस्थितिमा सम्पन्न सन्ध्या महाआरती।"
 *    }
 */

export const galleryCategories = ["सबै", "माता दुर्गा", "पूजा तथा आरती", "पण्डाल", "शोभायात्रा"];

export const galleryImages = [
  {
    id: 1,
    image: "/images/banner/committee-banner.png",
    title: "श्री जय दुर्गा पूजा सेवा समिति - आधिकारिक ब्यानर",
    category: "माता दुर्गा",
    date: "आधिकारिक",
    description: "|| जय माता दी || बहुदरमाई न.पा. ०६, गम्हरिया, भौराटार, पर्सा नेपाल।"
  },
  {
    id: 2,
    image: "/images/logo/committee-logo.png",
    title: "समितिको आधिकारिक प्रतीक चिन्ह (लोगो)",
    category: "माता दुर्गा",
    date: "आधिकारिक",
    description: "श्री जय दुर्गा पूजा सेवा समिति, बहुदरमाई न.पा. ०६, गम्हरिया, भौराटार, पर्साको पावन प्रतीक चिन्ह।"
  },
  {
    id: 3,
    image: "/images/hero/durga-face.png",
    title: "माता दुर्गाको दिव्य स्वरूप",
    category: "माता दुर्गा",
    date: "नवरात्र विशेष",
    description: "महाशक्ति जगज्जननी भगवती दुर्गा माताको दिव्य नयन तथा मङ्गलमय मुहार।"
  },
  {
    id: 4,
    image: "/images/qr/esewa-qr.jpg",
    title: "eSewa आधिकारिक दान सहयोग कार्ड",
    category: "पूजा तथा आरती",
    date: "दान सहयोग",
    description: "श्री जय दुर्गा पूजा सेवा समितिको आधिकारिक eSewa QR कोड।"
  },
  {
    id: 5,
    image: "/images/qr/bank-qr.jpg",
    title: "सिद्धार्थ बैंक आधिकारिक QR कोड",
    category: "पूजा तथा आरती",
    date: "दान सहयोग",
    description: "समितिको धार्मिक कार्यमा सहयोगका लागि सिद्धार्थ बैंक QR कोड।"
  }
];
