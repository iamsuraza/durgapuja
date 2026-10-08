import React, { useState } from 'react';
import { Heart, QrCode, Building2, Copy, Check, ExternalLink, Download, Sparkles, ShieldCheck } from 'lucide-react';
import { donationData } from '../data/donation';

export const DonationSection = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [activeModalQr, setActiveModalQr] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  return (
    <section id="donation" className="py-20 sm:py-28 bg-[#FFFDF7] relative overflow-hidden">
      {/* Decorative Traditional Backdrop */}
      <div className="absolute inset-0 bg-mandala opacity-30 pointer-events-none" />

      {/* Golden Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-red-100 border border-red-300 text-temple-crimson text-xs sm:text-sm font-bold mb-3 shadow-sm">
            <Heart className="w-4 h-4 fill-red-600 text-red-600" />
            <span>{donationData.sectionTag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serifDeva text-temple-maroon mb-4 leading-normal py-1">
            {donationData.title}
          </h2>

          <div className="flex items-center justify-center gap-3 w-40 mx-auto mb-6">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-amber-600 text-lg">🪔</span>
            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-amber-500" />
          </div>

          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
            {donationData.subtitle}
          </p>
        </div>

        {/* Two Primary Donation Cards: eSewa QR & Bank Account */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16">
          
          {/* Card 1: eSewa QR Card */}
          <div className="bg-gradient-to-b from-[#FEF9E7] to-white rounded-3xl p-6 sm:p-8 border-2 border-amber-400/80 shadow-temple flex flex-col justify-between relative group hover:border-amber-500 transition-all duration-300">
            <div>
              {/* Badge */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-amber-200">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#60BB46]/15 text-[#30781e] border border-[#60BB46]/40 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#60BB46] animate-pulse" />
                  <span>eSewa आधिकारिक QR</span>
                </span>
                <span className="text-xs text-neutral-500">
                  स्क्यान गरी भुक्तानी
                </span>
              </div>

              <h3 className="text-2xl font-bold font-serifDeva text-temple-maroon mb-2 flex items-center gap-2">
                <QrCode className="w-6 h-6 text-emerald-700" />
                <span>{donationData.esewa.title}</span>
              </h3>

              <p className="text-sm text-neutral-600 mb-6">
                {donationData.esewa.instructions}
              </p>

              {/* QR Image Display */}
              <div className="bg-white p-3 sm:p-4 rounded-2xl border-2 border-amber-300/70 shadow-inner flex flex-col items-center justify-center max-w-xs mx-auto mb-6">
                <div className="relative group/qr w-full overflow-hidden rounded-xl">
                  <img 
                    src={donationData.esewa.qrImage} 
                    alt="eSewa QR Code श्री जय दुर्गा पूजा सेवा समिति" 
                    className="w-full h-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setActiveModalQr({ src: donationData.esewa.qrImage, title: "eSewa QR - श्री जय दुर्गा पूजा सेवा समिति" })}
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold text-neutral-800 block">
                    {donationData.esewa.accountHolder}
                  </span>
                  <span className="text-[11px] text-neutral-500">
                    स्क्यान गर्न माथिको QR फोटो थिच्नुहोस्
                  </span>
                </div>
              </div>

              {/* Action Buttons for eSewa QR */}
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalQr({ src: donationData.esewa.qrImage, title: "eSewa QR - श्री जय दुर्गा पूजा सेवा समिति" })}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 transition-colors"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>QR ठूलो पारेर हेर्नुहोस्</span>
                </button>
                <a
                  href={donationData.esewa.qrImage}
                  download="shree-jai-durga-puja-esewa-qr.jpg"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-300 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>QR डाउनलोड गर्नुहोस्</span>
                </a>
              </div>
            </div>

            {/* Bottom trust note */}
            <div className="mt-6 pt-4 border-t border-amber-200/80 flex items-center justify-center gap-2 text-xs text-neutral-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>सुरक्षित तथा आधिकारिक डिजिटल भुक्तानी</span>
            </div>
          </div>

          {/* Card 2: Bank Account & Bank QR Card */}
          <div className="bg-gradient-to-b from-[#FEF9E7] to-white rounded-3xl p-6 sm:p-8 border-2 border-amber-400/80 shadow-temple flex flex-col justify-between relative group hover:border-amber-500 transition-all duration-300">
            <div>
              {/* Badge */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-amber-200">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-200/70 text-amber-900 border border-amber-400/50 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                  <span>{donationData.bank.badge}</span>
                </span>
                <span className="text-xs text-neutral-500">
                  QR तथा बैंक ट्रान्सफर
                </span>
              </div>

              <h3 className="text-2xl font-bold font-serifDeva text-temple-maroon mb-2 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-amber-800" />
                <span>{donationData.bank.title}</span>
              </h3>

              <p className="text-sm text-neutral-600 mb-6">
                {donationData.bank.instructions}
              </p>

              {/* Siddhartha Bank QR Display */}
              <div className="bg-white p-3 sm:p-4 rounded-2xl border-2 border-amber-300/70 shadow-inner flex flex-col items-center justify-center max-w-xs mx-auto mb-6">
                <div className="relative group/qr w-full overflow-hidden rounded-xl">
                  <img 
                    src={donationData.bank.qrImage} 
                    alt="Siddhartha Bank QR श्री जय दुर्गा पूजा सेवा समिति" 
                    className="w-full h-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setActiveModalQr({ src: donationData.bank.qrImage, title: "Siddhartha Bank QR - श्री जय दुर्गा पूजा सेवा समिति" })}
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold text-neutral-800 block">
                    सिद्धार्थ बैंक लिमिटेड (Siddhartha Bank)
                  </span>
                  <span className="text-[11px] text-neutral-500">
                    स्क्यान गर्न माथिको QR फोटो थिच्नुहोस्
                  </span>
                </div>
              </div>

              {/* Bank Details Table with clearly marked placeholders */}
              <div className="bg-amber-50/70 rounded-2xl p-4 border border-amber-200 mb-6 divide-y divide-amber-200/60">
                {donationData.bank.details.map((detail, idx) => (
                  <div key={idx} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
                    <span className="font-semibold text-neutral-700 w-32 shrink-0">
                      {detail.label}:
                    </span>
                    <div className="flex items-center justify-between sm:justify-end gap-2 flex-1">
                      <span className={`font-mono text-sm ${detail.isPlaceholder ? 'text-amber-900 bg-amber-200/60 px-2 py-0.5 rounded border border-amber-300 text-xs italic' : 'text-neutral-900 font-bold'}`}>
                        {detail.value}
                      </span>
                      {!detail.isPlaceholder && (
                        <button
                          type="button"
                          onClick={() => handleCopy(detail.value, detail.label)}
                          className="p-1 text-neutral-500 hover:text-neutral-800 hover:bg-amber-200/80 rounded transition-colors"
                          title="प्रतिलिपि गर्नुहोस्"
                          aria-label={`Copy ${detail.label}`}
                        >
                          {copiedField === detail.label ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons for Bank QR */}
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalQr({ src: donationData.bank.qrImage, title: "Siddhartha Bank QR - श्री जय दुर्गा पूजा सेवा समिति" })}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 transition-colors"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>QR ठूलो पारेर हेर्नुहोस्</span>
                </button>
                <a
                  href={donationData.bank.qrImage}
                  download="shree-jai-durga-puja-bank-qr.jpg"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-300 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>QR डाउनलोड गर्नुहोस्</span>
                </a>
              </div>
            </div>

            {/* Bottom trust note */}
            <div className="mt-6 pt-4 border-t border-amber-200/80 flex items-center justify-center gap-2 text-xs text-neutral-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>समितिको आधिकारिक बैंक खाता</span>
            </div>
          </div>

        </div>

        {/* Thank You Devotional Quote Box */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-red-900 via-temple-maroon to-red-900 text-amber-100 rounded-2xl p-6 sm:p-8 border-2 border-amber-400 shadow-xl mb-12">
          <p className="text-lg sm:text-2xl font-serifDeva font-bold text-amber-200 tracking-wide mb-2">
            {donationData.thankYouNote}
          </p>
          <p className="text-xs sm:text-sm text-amber-300/80 font-medium">
            तपाईंको सानो सहयोगले पनि माताको पावन महोत्सवलाई सफल बनाउन ठूलो भूमिका खेल्दछ।
          </p>
        </div>

        {/* Donation Purpose Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {donationData.purposes.map((p, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-amber-200/80 shadow-sm hover:shadow-md hover:border-amber-400 transition-all text-center"
            >
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4 text-xl">
                {idx === 0 ? "🪔" : idx === 1 ? "🍲" : "🎪"}
              </div>
              <h4 className="font-bold text-temple-maroon text-base mb-2 font-serifDeva">
                {p.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* QR Code Full Screen Lightbox Modal */}
      {activeModalQr && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveModalQr(null)}
        >
          <div 
            className="bg-white rounded-3xl p-6 max-w-sm sm:max-w-md w-full shadow-2xl relative border-2 border-amber-400 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-lg font-bold font-serifDeva text-temple-maroon mb-4 text-center">
              {activeModalQr.title}
            </h4>
            <div className="w-full bg-[#FEF9E7] p-4 rounded-2xl border border-amber-300 mb-4 flex items-center justify-center">
              <img 
                src={activeModalQr.src} 
                alt="QR Modal" 
                className="max-h-[60vh] w-auto object-contain rounded-xl shadow-md"
              />
            </div>
            <div className="flex gap-3 w-full">
              <a
                href={activeModalQr.src}
                download="qr-code.jpg"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-600 text-red-950 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>डाउनलोड गर्नुहोस्</span>
              </a>
              <button
                type="button"
                onClick={() => setActiveModalQr(null)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-neutral-200 hover:bg-neutral-300 text-neutral-800 transition-colors"
              >
                बन्द गर्नुहोस्
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
