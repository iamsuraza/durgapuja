import React from 'react';
import { Users, User, ShieldCheck, Sparkles, Info } from 'lucide-react';
import { committeeInfo, committeeMembers } from '../data/committee';

export const CommitteeSection = () => {
  return (
    <section id="committee" className="py-20 sm:py-28 bg-[#FEF9E7]/40 relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs sm:text-sm font-semibold mb-3 shadow-sm">
            <Users className="w-4 h-4 text-amber-700" />
            <span>{committeeInfo.sectionTag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serifDeva text-temple-maroon mb-2 leading-normal py-1">
            {committeeInfo.title}
          </h2>

          <h3 className="text-lg sm:text-xl font-bold font-serifDeva text-amber-800 mb-4 leading-normal py-0.5">
            {committeeInfo.committeeName}
          </h3>

          <div className="flex items-center justify-center gap-3 w-40 mx-auto mb-6">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-amber-600 text-lg">🪔</span>
            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-amber-500" />
          </div>

          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-6">
            {committeeInfo.description}
          </p>

          {/* Committee Note Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-100/70 border border-amber-300 text-amber-900 text-xs sm:text-sm">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>सूचना:</strong> {committeeInfo.note}
            </span>
          </div>
        </div>

        {/* Member Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {committeeMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl p-6 border border-amber-300/70 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-red-600 to-amber-400" />

              {/* Avatar Frame with Lotus / Diya Theme */}
              <div className="relative mb-5 mt-2">
                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-amber-50 flex items-center justify-center text-temple-maroon border border-amber-300">
                    <User className="w-10 h-10 text-amber-700/80" />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-temple-sindoor text-amber-200 p-1 rounded-full border border-amber-300 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Member Position Badge */}
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-temple-crimson border border-red-200 mb-2.5">
                {member.position}
              </span>

              {/* Member Name (Placeholder clearly labeled) */}
              <h4 className="font-bold text-neutral-800 text-base font-serifDeva mb-1">
                {member.name}
              </h4>

              {member.isPlaceholder && (
                <span className="text-[11px] text-amber-800/80 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 mt-1 italic">
                  (नाम अद्यावधिक गर्न बाँकी)
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
