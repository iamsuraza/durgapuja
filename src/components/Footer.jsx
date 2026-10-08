import React from 'react';
import { Heart, MapPin, ExternalLink, Sparkles, ArrowUp } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export const Footer = () => {
  // Dynamic Nepali Bikram Sambat Year
  const getNepaliYear = () => {
    const now = new Date();
    const adYear = now.getFullYear();
    const adMonth = now.getMonth(); // 0 is Jan, 3 is mid-April approx
    // BS year is AD + 57 (mid-April to Dec) or AD + 56 (Jan to mid-April)
    const bsYear = adMonth >= 3 ? adYear + 57 : adYear + 56;
    const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return bsYear
      .toString()
      .split('')
      .map(digit => nepaliDigits[parseInt(digit, 10)] ?? digit)
      .join('');
  };

  const navLinks = [
    { name: "गृहपृष्ठ", href: "#hero" },
    { name: "हाम्रो बारेमा", href: "#about" },
    { name: "पूजा कार्यक्रम", href: "#schedule" },
    { name: "सहयोग गर्नुहोस्", href: "#donation" },
    { name: "समिति", href: "#committee" },
    { name: "फोटो ग्यालरी", href: "#gallery" },
    { name: "सम्पर्क", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#26050a] via-[#1a0307] to-[#120205] text-white relative border-t-2 border-amber-500/40">
      {/* Decorative Traditional Border Bar */}
      <div className="h-2 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 shadow-md" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 min-w-[56px] min-h-[56px] shrink-0 aspect-square rounded-full p-0.5 bg-gradient-to-tr from-amber-400 to-amber-600 shadow-lg">
                <img 
                  src={siteContent.logoImage} 
                  alt="श्री जय दुर्गा पूजा सेवा समिति लोगो" 
                  className="w-full h-full aspect-square object-contain rounded-full bg-white block"
                />
              </div>
              <div className="min-w-0">
                <span className="text-amber-400 text-xs font-serifDeva block">
                  {siteContent.invocation}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-serifDeva text-white leading-normal py-0.5">
                  {siteContent.committeeName}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm">
              माता दुर्गाको पावन आराधना तथा परम्परागत नवरात्र महोत्सवको भव्य व्यवस्थापनका लागि समर्पित धार्मिक सेवा समिति।
            </p>

            <div className="flex items-start gap-2 text-xs text-amber-200/90 pt-1">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{siteContent.address}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-base font-bold font-serifDeva text-amber-300 border-b border-amber-500/30 pb-2 inline-block">
              मुख्य पृष्ठहरू (Quick Links)
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-neutral-300">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5 py-1"
                  >
                    <span className="text-amber-500 text-xs">✦</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Support */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold font-serifDeva text-amber-300 border-b border-amber-500/30 pb-2 inline-block">
              सामाजिक सञ्जाल
            </h4>
            
            <p className="text-xs text-neutral-300 leading-relaxed">
              फेसबुक पेजमा जोडिएर पूजा, आरती र कार्यक्रमको ताजा जानकारी पाउनुहोस्।
            </p>

            <a
              href={siteContent.facebook.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-md transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook पेज हेर्नुहोस्</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <div className="pt-2">
              <a
                href="#donation"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-red-950 shadow-md hover:brightness-110 transition-all"
              >
                <Heart className="w-3.5 h-3.5 fill-red-950" />
                <span>धार्मिक कार्यमा सहयोग</span>
              </a>
            </div>
          </div>

        </div>

        {/* Sacred Shloka Mantra Banner */}
        <div className="mt-12 pt-8 border-t border-amber-900/50 text-center">
          <p className="text-amber-300 font-serifDeva text-xs sm:text-sm font-semibold tracking-wider">
            || ॐ दुर्गे दुर्गे रक्षिणि स्वाहा ||
          </p>
        </div>

        {/* Dynamic Copyright & Scroll to Top */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {getNepaliYear()} {siteContent.committeeName}। सर्वाधिकार सुरक्षित।
          </p>
          
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 text-amber-300 border border-amber-500/30 transition-colors"
          >
            <span>माथि जानुहोस्</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
