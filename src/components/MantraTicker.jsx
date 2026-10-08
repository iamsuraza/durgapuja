import React from 'react';
import { siteContent } from '../data/siteContent';

export const MantraTicker = () => {
  return (
    <div className="bg-temple-maroon text-amber-300 py-2.5 sm:py-3 border-b border-amber-600/30 overflow-hidden text-xs sm:text-sm font-medium tracking-wide">
      <div className="flex items-center">
        <div className="bg-temple-crimson text-amber-200 px-3.5 py-1 rounded-r-full text-xs font-semibold shrink-0 flex items-center gap-1.5 shadow-sm border-r border-amber-500/40 z-10">
          <span className="text-amber-400">🕉️</span>
          <span className="leading-normal py-0.5">श्री दुर्गा स्तुति</span>
        </div>
        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="animate-marquee inline-flex items-center gap-8 pl-4 py-0.5">
            {siteContent.mantras.map((mantra, idx) => (
              <span key={idx} className="inline-flex items-center gap-3">
                <span className="text-amber-400/80">✦</span>
                <span className="font-serifDeva leading-normal py-0.5 text-amber-200">{mantra}</span>
              </span>
            ))}
            {siteContent.mantras.map((mantra, idx) => (
              <span key={`dup-${idx}`} className="inline-flex items-center gap-3">
                <span className="text-amber-400/80">✦</span>
                <span className="font-serifDeva leading-normal py-0.5 text-amber-200">{mantra}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
