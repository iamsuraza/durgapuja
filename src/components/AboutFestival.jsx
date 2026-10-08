import React from 'react';
import { Sparkles, Flame, Users, BookOpen } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export const AboutFestival = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFFDF7] relative overflow-hidden">
      {/* Subtle traditional mandala dot background */}
      <div className="absolute inset-0 bg-mandala opacity-40 pointer-events-none" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs sm:text-sm font-semibold mb-3 shadow-sm">
            <span className="text-base">🪔</span>
            <span>{siteContent.about.sectionTag}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serifDeva text-temple-maroon mb-4 leading-normal py-1">
            {siteContent.about.title}
          </h2>

          <div className="flex items-center justify-center gap-3 w-40 mx-auto mb-6">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-amber-600 text-lg">🌺</span>
            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-amber-500" />
          </div>

          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
            {siteContent.about.paragraphs[0]}
          </p>
        </div>

        {/* Two Column Content: Durga Graphic + Committee Community Role */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Visual Durga Face Motif in Traditional Shrine Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Golden Glow & Border */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-red-500/20 to-amber-500/20 rounded-3xl blur-md" />
              
              <div className="relative bg-gradient-to-b from-[#FEF9E7] to-white rounded-2xl p-6 sm:p-8 border-2 border-amber-400/60 shadow-xl text-center">
                
                {/* Traditional Shrine Crown */}
                <div className="flex items-center justify-center gap-2 mb-4 text-amber-700">
                  <span className="text-xl">🪔</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-amber-800">
                    श्री जगदम्बा दुर्गतिनाशिनी
                  </span>
                  <span className="text-xl">🪔</span>
                </div>

                {/* Durga Divine Face */}
                <div className="relative my-4 p-4 flex items-center justify-center">
                  <img 
                    src={siteContent.durgaFaceImage} 
                    alt="माता दुर्गाको दिव्य स्वरूप" 
                    className="max-h-56 sm:max-h-64 object-contain filter drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Shloka in the Shrine Card */}
                <div className="pt-4 border-t border-amber-200">
                  <p className="text-sm font-serifDeva text-temple-sindoor font-semibold italic">
                    “या देवी सर्वभूतेषु शक्ति-रूपेण संस्थिता ।<br/>नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः ॥”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Explanatory Content & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-amber-200/80 shadow-md">
              <h3 className="text-2xl font-bold font-serifDeva text-temple-maroon mb-4 flex items-center gap-2">
                <span className="text-amber-600">🕉️</span>
                <span>स्थानीय समुदाय र समितिको भूमिका</span>
              </h3>
              
              <p className="text-neutral-700 text-base leading-relaxed mb-4">
                {siteContent.about.paragraphs[1]}
              </p>

              <p className="text-neutral-700 text-base leading-relaxed">
                {siteContent.about.paragraphs[2]}
              </p>
            </div>

            {/* Quick Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {siteContent.about.features.map((item, index) => {
                const icons = [
                  <Flame key="0" className="w-5 h-5 text-amber-600" />,
                  <BookOpen key="1" className="w-5 h-5 text-amber-600" />,
                  <Users key="2" className="w-5 h-5 text-amber-600" />
                ];
                return (
                  <div 
                    key={index}
                    className="bg-amber-50/60 rounded-xl p-4 border border-amber-200/60 hover:border-amber-400 hover:bg-amber-50 transition-all duration-200 shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center mb-3">
                      {icons[index]}
                    </div>
                    <h4 className="font-bold text-temple-maroon text-sm mb-1.5 font-serifDeva">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
