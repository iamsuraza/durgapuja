import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, CheckCircle2, ChevronRight, Info } from 'lucide-react';
import { pujaSchedule } from '../data/pujaSchedule';

export const PujaSchedule = () => {
  const [selectedDayId, setSelectedDayId] = useState(null);

  return (
    <section id="schedule" className="py-20 sm:py-28 bg-[#FEF9E7]/50 relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs sm:text-sm font-semibold mb-3 shadow-sm">
            <Calendar className="w-4 h-4 text-amber-700" />
            <span>दैनिक पूजा तालिका</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serifDeva text-temple-maroon mb-4">
            नवरात्रि पूजा कार्यक्रम
          </h2>

          <div className="flex items-center justify-center gap-3 w-40 mx-auto mb-6">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-amber-600 text-lg">🪔</span>
            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-amber-500" />
          </div>

          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
            घटस्थापनादेखि विजयादशमी तथा विसर्जनसम्मका सम्पूर्ण धार्मिक अनुष्ठान, महापूजा, आरती तथा सांस्कृतिक कार्यक्रमहरूको विवरण।
          </p>

          {/* Committee Note Banner */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-100/70 border border-amber-300 text-amber-900 text-xs sm:text-sm">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>सूचना:</strong> कार्यक्रमको निश्चित मिति तथा समय नेपाली पात्रो (पञ्चाङ्ग) अनुसार समितिद्वारा अद्यावधिक गरिन्छ।
            </span>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Center Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-1 bg-gradient-to-b from-amber-400 via-amber-500 to-red-400/30 rounded-full" />

          {/* Days List */}
          <div className="space-y-8 sm:space-y-12">
            {pujaSchedule.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.id} 
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node in Center (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-temple-maroon border-4 border-amber-400 text-amber-300 items-center justify-center font-bold text-sm shadow-gold z-10">
                    {item.id}
                  </div>

                  {/* Empty Spacer Half on Desktop */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Content Card (Takes full width on mobile, half on desktop) */}
                  <div className={`w-full lg:w-1/2 ${
                    isEven ? 'lg:pr-12' : 'lg:pl-12'
                  }`}>
                    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-amber-300/80 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 group relative">
                      
                      {/* Top Day Badge & ID */}
                      <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-amber-100">
                        <div className="flex items-center gap-2">
                          <span className="lg:hidden flex items-center justify-center w-7 h-7 rounded-full bg-temple-maroon text-amber-300 text-xs font-bold border border-amber-400">
                            {item.id}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-red-50 text-temple-crimson text-xs sm:text-sm font-bold border border-red-200">
                            {item.day}
                          </span>
                        </div>

                        {/* Date Chip */}
                        <div className="inline-flex items-center gap-1.5 text-xs text-amber-800 font-semibold bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                          <Calendar className="w-3.5 h-3.5 text-amber-600" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold font-serifDeva text-temple-maroon mb-2 leading-normal py-0.5 group-hover:text-amber-800 transition-colors">
                        {item.title}
                      </h3>

                      {/* Time Slot Chip */}
                      <div className="inline-flex items-center gap-1.5 text-xs text-neutral-600 mb-3 bg-neutral-100/80 px-2.5 py-1 rounded-md">
                        <Clock className="w-3.5 h-3.5 text-amber-700" />
                        <span>समय: {item.time}</span>
                      </div>

                      {/* Description */}
                      <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Ritual Badges / Key Events */}
                      {item.rituals && item.rituals.length > 0 && (
                        <div className="pt-3 border-t border-amber-100/80">
                          <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                            मुख्य विधि तथा अनुष्ठान:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.rituals.map((ritual, rIdx) => (
                              <span 
                                key={rIdx}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs border border-amber-200/80"
                              >
                                <span className="text-amber-500 text-[10px]">✦</span>
                                <span>{ritual}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
