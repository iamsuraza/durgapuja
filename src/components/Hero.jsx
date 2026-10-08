import React from 'react';
import { Calendar, Heart, Sparkles, MapPin, ChevronDown } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#38070e] via-[#4d0c14] to-[#26050a] text-white">
      {/* Decorative Traditional Backdrop with Subtle Mandala Pattern */}
      <div className="absolute inset-0 bg-mandala-dark opacity-35" />
      
      {/* Golden Radial Aura in Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-amber-500/20 via-orange-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Temple Top Arch Border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center z-10 flex flex-col items-center">
        
        {/* Sacred Invocation Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/70 border border-amber-500/50 shadow-gold text-amber-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm animate-pulse">
          <span className="text-amber-400">🕉️</span>
          <span>{siteContent.invocation}</span>
          <span className="text-amber-400/80">•</span>
          <span className="text-amber-200">{siteContent.hero.badge}</span>
        </div>

        {/* Committee Logo with Golden Seal Rings */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-600 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition duration-500" />
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-b from-amber-300 to-amber-600 shadow-2xl flex items-center justify-center">
            <img 
              src={siteContent.logoImage} 
              alt="श्री जय दुर्गा पूजा सेवा समिति आधिकारिक लोगो" 
              className="w-full h-full object-cover rounded-full bg-white shadow-inner"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-temple-crimson text-amber-300 p-1.5 rounded-full border border-amber-400 shadow-md">
            <Sparkles className="w-4 h-4 text-amber-300" />
          </div>
        </div>

        {/* Main Heading - With generous vertical clearance and solid radiant text to prevent any Devanagari matra clipping */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serifDeva text-amber-200 leading-normal py-1 tracking-wide drop-shadow-[0_2px_12px_rgba(245,158,11,0.4)] mb-3">
          {siteContent.committeeName}
        </h1>

        {/* Subheading Address */}
        <div className="flex items-center justify-center gap-1.5 text-amber-200/90 text-sm sm:text-lg md:text-xl font-medium mb-6 max-w-3xl leading-relaxed px-2 text-center">
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
          <span className="leading-normal py-0.5">{siteContent.address}</span>
        </div>

        {/* Decorative Golden Divider */}
        <div className="flex items-center justify-center gap-3 w-48 sm:w-72 mb-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-amber-400/80" />
          <span className="text-amber-400 text-lg">🪔</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-amber-400/80" />
        </div>

        {/* Devotional Welcome Message */}
        <blockquote className="max-w-3xl text-amber-100/95 text-base sm:text-xl font-serifDeva italic leading-relaxed mb-8 px-5 py-4 bg-red-950/50 rounded-2xl border border-amber-500/30 backdrop-blur-sm shadow-inner">
          <p className="leading-relaxed py-0.5">{siteContent.hero.devotionalMessage}</p>
        </blockquote>

        {/* Call-to-action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary Button */}
          <a
            href="#schedule"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-bold bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-red-950 shadow-gold hover:shadow-gold-lg hover:brightness-110 active:scale-95 transition-all duration-200 border border-amber-200 group"
          >
            <Calendar className="w-5 h-5 text-red-950 group-hover:scale-110 transition-transform" />
            <span className="leading-normal">{siteContent.hero.primaryCtaText}</span>
          </a>

          {/* Secondary Button */}
          <a
            href="#donation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-bold bg-red-900/80 hover:bg-red-900 text-amber-100 border border-amber-400/60 shadow-md hover:border-amber-300 hover:text-white active:scale-95 transition-all duration-200 group"
          >
            <Heart className="w-5 h-5 text-amber-400 fill-amber-400/20 group-hover:scale-110 transition-transform" />
            <span className="leading-normal">{siteContent.hero.secondaryCtaText}</span>
          </a>
        </div>

        {/* Visual Durga Banner Feature Card */}
        <div className="mt-12 w-full max-w-4xl rounded-2xl p-1.5 bg-gradient-to-r from-amber-500/40 via-red-500/40 to-amber-500/40 border border-amber-500/50 shadow-2xl backdrop-blur-md">
          <div className="bg-white rounded-xl p-3 sm:p-5 text-neutral-800 shadow-inner flex flex-col items-center">
            <img 
              src={siteContent.bannerImage} 
              alt="श्री जय दुर्गा पूजा सेवा समिति ब्यानर" 
              className="w-full h-auto max-h-36 sm:max-h-48 object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <a 
          href="#about"
          className="mt-10 inline-flex flex-col items-center text-amber-300/70 hover:text-amber-300 transition-colors duration-200 text-xs"
          aria-label="तल स्क्रोल गर्नुहोस्"
        >
          <span className="mb-1 font-medium">थप जान्नुहोस्</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-amber-400" />
        </a>

      </div>
    </section>
  );
};
