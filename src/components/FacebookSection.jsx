import React from 'react';
import { ExternalLink, Share2, ThumbsUp, BellRing, Sparkles } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export const FacebookSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#26050a] via-[#38070e] to-[#26050a] text-white relative overflow-hidden">
      {/* Decorative Traditional Backdrop */}
      <div className="absolute inset-0 bg-mandala-dark opacity-40 pointer-events-none" />

      {/* Golden Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-red-950/80 via-black/40 to-red-950/80 rounded-3xl p-8 sm:p-12 border-2 border-amber-500/40 shadow-2xl backdrop-blur-md text-center">
          
          {/* Facebook Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1877F2] text-white shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
            <svg 
              className="w-9 h-9 fill-current" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl font-bold font-serifDeva text-amber-200 mb-4 leading-normal py-1">
            आधिकारिक Facebook पेजमा जोडिनुहोस्
          </h2>

          <div className="flex items-center justify-center gap-3 w-36 mx-auto mb-6">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-amber-400 text-sm">✦</span>
            <div className="h-[1px] flex-1 bg-gradient-l from-transparent to-amber-400" />
          </div>

          <p className="text-amber-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            {siteContent.facebook.ctaDescription}
          </p>

          {/* Key Facebook Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8 text-left">
            <div className="bg-red-900/30 rounded-xl p-3.5 border border-amber-500/20 flex items-center gap-3">
              <BellRing className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs text-amber-100 font-medium">ताजा सूचना तथा पूजा तालिका</span>
            </div>
            <div className="bg-red-900/30 rounded-xl p-3.5 border border-amber-500/20 flex items-center gap-3">
              <Share2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs text-amber-100 font-medium">लाइभ महाआरती तथा भिडियो</span>
            </div>
            <div className="bg-red-900/30 rounded-xl p-3.5 border border-amber-500/20 flex items-center gap-3">
              <ThumbsUp className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs text-amber-100 font-medium">सामुदायिक सहकार्य र संवाद</span>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="flex justify-center">
            <a
              href={siteContent.facebook.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20"
            >
              <svg 
                className="w-5 h-5 fill-current" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>{siteContent.facebook.buttonText}</span>
              <ExternalLink className="w-4 h-4 text-white/80" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
