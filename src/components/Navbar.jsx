import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, BellRing, MapPin } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "गृहपृष्ठ", href: "#hero" },
    { name: "हाम्रो बारेमा", href: "#about" },
    { name: "पूजा कार्यक्रम", href: "#schedule" },
    { name: "सहयोग गर्नुहोस्", href: "#donation" },
    { name: "समिति", href: "#committee" },
    { name: "फोटो ग्यालरी", href: "#gallery" },
    { name: "सम्पर्क", href: "#contact" }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-temple-maroon/95 backdrop-blur-md shadow-lg border-b border-amber-500/30 py-2.5' 
        : 'bg-temple-maroon border-b border-amber-600/20 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-1"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 shadow-md group-hover:scale-105 transition-transform duration-300">
              <img 
                src={siteContent.logoImage} 
                alt="श्री जय दुर्गा पूजा सेवा समिति लोगो" 
                className="w-full h-full object-cover rounded-full bg-white"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-amber-200 text-xs font-serifDeva tracking-wider leading-normal">
                {siteContent.invocation}
              </span>
              <span className="text-white font-bold text-sm sm:text-base md:text-xl font-serifDeva leading-normal py-0.5 tracking-wide group-hover:text-amber-300 transition-colors">
                {siteContent.committeeName}
              </span>
              <span className="text-amber-300/80 text-[11px] sm:text-xs flex items-center gap-1 font-medium leading-normal">
                <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                <span>{siteContent.shortAddress}</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isDonate = link.href === "#donation";
              if (isDonate) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-red-950 shadow-gold hover:shadow-gold-lg hover:brightness-110 active:scale-95 transition-all duration-200 border border-amber-300"
                  >
                    <Heart className="w-4 h-4 fill-red-900 text-red-900" />
                    <span>{link.name}</span>
                  </a>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-amber-100 hover:text-amber-300 hover:bg-red-900/40 transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#donation"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500 to-amber-400 text-red-950 shadow-sm"
            >
              <Heart className="w-3.5 h-3.5 fill-red-950" />
              <span>सहयोग</span>
            </a>
            
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-amber-200 hover:text-white hover:bg-red-900/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label={isOpen ? "मेनु बन्द गर्नुहोस्" : "मेनु खोल्नुहोस्"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-temple-maroon border-b border-amber-500/40 shadow-xl transition-all animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1 divide-y divide-red-900/60">
            <div className="space-y-1 pb-3">
              {navLinks.map((link) => {
                const isDonate = link.href === "#donation";
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isDonate 
                        ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-red-950 font-bold flex items-center justify-between mt-2 shadow-sm'
                        : 'text-amber-100 hover:text-white hover:bg-red-900/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isDonate && <Heart className="w-4 h-4 fill-red-950 text-red-950" />}
                  </a>
                );
              })}
            </div>
            
            {/* Quick Mobile Info */}
            <div className="pt-3 text-xs text-amber-200/80 flex items-center justify-between">
              <span>{siteContent.invocation}</span>
              <span>{siteContent.shortAddress}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
