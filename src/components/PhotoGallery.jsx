import React, { useState, useEffect, useCallback } from 'react';
import { Camera, Maximize2, ChevronLeft, ChevronRight, X, Calendar, Tag, Info } from 'lucide-react';
import { galleryImages, galleryCategories } from '../data/gallery';

export const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("सबै");
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  // Filter images based on category
  const filteredImages = selectedCategory === "सबै"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showPrev = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
  }, [activeImageIndex, filteredImages.length]);

  const showNext = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
  }, [activeImageIndex, filteredImages.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, showPrev, showNext]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FFFDF7] relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs sm:text-sm font-semibold mb-3 shadow-sm">
            <Camera className="w-4 h-4 text-amber-700" />
            <span>स्मृति तथा उत्सव</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serifDeva text-temple-maroon mb-4 leading-normal py-1">
            फोटो ग्यालरी
          </h2>

          <div className="flex items-center justify-center gap-3 w-40 mx-auto mb-6">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-amber-600 text-lg">🌺</span>
            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-amber-500" />
          </div>

          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
            नवरात्रि पूजा महोत्सव, माताको दिव्य स्वरूप, पूजा अर्चना, महाआरती तथा भक्तजनहरूको पावन उपस्थितिका झलकहरू।
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-temple-crimson text-white border-temple-crimson shadow-md scale-105'
                  : 'bg-white text-neutral-700 border-amber-200 hover:border-amber-400 hover:bg-amber-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-white rounded-2xl overflow-hidden border-2 border-amber-200/80 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-gradient-to-b from-amber-50 to-amber-100 overflow-hidden flex items-center justify-center p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white w-full">
                    <span className="text-xs text-amber-300 font-semibold block mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold font-serifDeva leading-normal py-0.5">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Zoom Icon Badge */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4 text-amber-300" />
                </div>
              </div>

              {/* Caption Footer */}
              <div className="p-4 bg-white border-t border-amber-100">
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-1.5">
                  <span className="inline-flex items-center gap-1 text-amber-800 font-medium">
                    <Tag className="w-3 h-3 text-amber-600" />
                    <span>{item.category}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-neutral-400" />
                    <span>{item.date}</span>
                  </span>
                </div>
                <h4 className="font-bold text-neutral-800 text-sm font-serifDeva leading-normal py-0.5">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note for Committee Image Uploads */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-neutral-700">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>समितिका लागि जानकारी:</strong> नयाँ फोटोहरू <code className="bg-white px-2 py-0.5 rounded border border-amber-300 text-amber-900 font-mono text-xs">public/images/gallery/</code> फोल्डरमा राखी सजिलै थप्न सकिन्छ।
            </span>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && filteredImages[activeImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Bar: Title & Close Button */}
          <div 
            className="flex items-center justify-between text-white pb-3 max-w-6xl mx-auto w-full z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-serifDeva font-bold text-sm sm:text-base">
                {filteredImages[activeImageIndex].title}
              </span>
              <span className="text-xs text-neutral-400 hidden sm:inline">
                ({activeImageIndex + 1} / {filteredImages.length})
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              aria-label="ग्यालरी बन्द गर्नुहोस्"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Area: Image & Nav Buttons */}
          <div 
            className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110"
              aria-label="अघिल्लो फोटो"
            >
              <ChevronLeft className="w-6 h-6 text-amber-300" />
            </button>

            {/* Displayed Image */}
            <div className="max-h-[75vh] max-w-full flex items-center justify-center p-2">
              <img
                src={filteredImages[activeImageIndex].image}
                alt={filteredImages[activeImageIndex].title}
                className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110"
              aria-label="पछिल्लो फोटो"
            >
              <ChevronRight className="w-6 h-6 text-amber-300" />
            </button>
          </div>

          {/* Bottom Bar: Description & Date */}
          <div 
            className="text-center text-neutral-300 text-xs sm:text-sm max-w-3xl mx-auto pt-3 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-amber-200/90 font-medium mb-1">
              {filteredImages[activeImageIndex].description}
            </p>
            <span className="text-neutral-400 text-xs">
              मिति / स्थिति: {filteredImages[activeImageIndex].date}
            </span>
          </div>
        </div>
      )}

    </section>
  );
};
