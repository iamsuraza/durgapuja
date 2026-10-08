import React, { useState } from 'react';
import { MapPin, Phone, Mail, ExternalLink, Send, CheckCircle2, MessageSquare, Info } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export const ContactLocation = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FFFDF7] relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs sm:text-sm font-semibold mb-3 shadow-sm">
            <MapPin className="w-4 h-4 text-amber-700" />
            <span>{siteContent.contact.sectionTag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serifDeva text-temple-maroon mb-4 leading-normal py-1">
            {siteContent.contact.title}
          </h2>

          <div className="flex items-center justify-center gap-3 w-40 mx-auto mb-6">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-amber-600 text-lg">🪔</span>
            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-amber-500" />
          </div>

          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
            {siteContent.contact.description}
          </p>
        </div>

        {/* Content Grid: Contact Details & Map Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-300/70 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 text-temple-crimson flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-temple-maroon text-base font-serifDeva mb-1">
                    पूजा स्थल तथा ठेगाना
                  </h3>
                  <p className="text-neutral-700 text-sm font-medium leading-relaxed">
                    {siteContent.contact.address}
                  </p>
                  <a
                    href={siteContent.contact.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-900 font-bold mt-2"
                  >
                    <span>गुगल नक्सामा हेर्नुहोस्</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card (Placeholder) */}
            <div className="bg-white rounded-2xl p-6 border border-amber-200/80 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-temple-maroon text-base font-serifDeva mb-1">
                    फोन सम्पर्क
                  </h3>
                  <p className="text-amber-900 bg-amber-100/70 px-2.5 py-1 rounded text-xs italic font-medium inline-block border border-amber-200">
                    {siteContent.contact.phonePlaceholder}
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    (समितिको आधिकारिक सम्पर्क नम्बर पछि थपिनेछ)
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card (Placeholder) */}
            <div className="bg-white rounded-2xl p-6 border border-amber-200/80 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-temple-maroon text-base font-serifDeva mb-1">
                    इमेल ठेगाना
                  </h3>
                  <p className="text-amber-900 bg-amber-100/70 px-2.5 py-1 rounded text-xs italic font-medium inline-block border border-amber-200">
                    {siteContent.contact.emailPlaceholder}
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    (समितिको आधिकारिक इमेल ठेगाना पछि थपिनेछ)
                  </p>
                </div>
              </div>
            </div>

            {/* Facebook Card */}
            <div className="bg-white rounded-2xl p-6 border border-amber-200/80 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#1877F2] flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-temple-maroon text-base font-serifDeva mb-1">
                    Facebook पेज
                  </h3>
                  <p className="text-neutral-600 text-xs mb-2">
                    {siteContent.committeeName}
                  </p>
                  <a
                    href={siteContent.facebook.pageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#1877F2] hover:underline font-bold"
                  >
                    <span>पेज खोल्नुहोस्</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Placeholder & Devotional Inquiry Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Map Area */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-300/70 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-temple-maroon text-lg font-serifDeva flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-700" />
                  <span>नक्सा तथा स्थान (Location Map)</span>
                </h3>
                <span className="text-xs text-neutral-500 font-medium">
                  पर्सा, नेपाल
                </span>
              </div>

              {/* Map Canvas / View Card */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border-2 border-amber-200 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-red-700/10 text-red-700 flex items-center justify-center mb-3 border border-red-300 shadow-sm animate-bounce">
                  <MapPin className="w-8 h-8 text-red-700" />
                </div>
                <h4 className="font-bold text-temple-maroon text-base sm:text-lg font-serifDeva mb-1">
                  {siteContent.committeeName}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 max-w-md mb-4">
                  {siteContent.address}
                </p>

                <a
                  href={siteContent.contact.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-temple-crimson hover:bg-temple-maroon text-white shadow-md transition-colors"
                >
                  <MapPin className="w-4 h-4 text-amber-300" />
                  <span>Google Maps मा हेर्नुहोस् र दिशा पत्ता लगाउनुहोस्</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="mt-3 text-xs text-neutral-500 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>
                  निश्चित गुगल नक्सा एम्बेड (Google Maps Embed) पछि थप्न सकिनेछ।
                </span>
              </div>
            </div>

            {/* Quick Devotional Message / Inquiry Form */}
            <div className="bg-gradient-to-b from-white to-[#FEF9E7] rounded-3xl p-6 sm:p-7 border border-amber-300/80 shadow-md">
              <h3 className="font-bold text-temple-maroon text-lg font-serifDeva mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-amber-700" />
                <span>समितिलाई सन्देश वा प्रार्थना पठाउनुहोस्</span>
              </h3>
              <p className="text-xs text-neutral-600 mb-4">
                पूजा, आरती, प्रसाद व्यवस्थापन वा दान सम्बन्धी कुनै सुझाव वा जिज्ञासा भए यहाँ लेख्न सक्नुहुन्छ।
              </p>

              {formSubmitted ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold">
                    धन्यवाद! तपाईंको सन्देश प्राप्त भएको छ। जय माता दी!
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="तपाईंको नाम *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300/80 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <input
                      type="tel"
                      placeholder="सम्पर्क नम्बर"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300/80 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <textarea
                    required
                    rows="3"
                    placeholder="तपाईंको सन्देश वा जिज्ञासा यहाँ लेख्नुहोस्... *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300/80 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-red-950 shadow-md transition-all active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>सन्देश पठाउनुहोस्</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
