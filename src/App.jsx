import React from 'react';
import { MantraTicker } from './components/MantraTicker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutFestival } from './components/AboutFestival';
import { PujaSchedule } from './components/PujaSchedule';
import { DonationSection } from './components/DonationSection';
import { CommitteeSection } from './components/CommitteeSection';
import { PhotoGallery } from './components/PhotoGallery';
import { FacebookSection } from './components/FacebookSection';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF7] text-neutral-800 font-devanagari relative">
      {/* 1. Sacred Mantra Ticker */}
      <MantraTicker />

      {/* 2. Responsive Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section with Prominent Logo and CTAs */}
        <Hero />

        {/* 4. About Festival & Committee Role */}
        <AboutFestival />

        {/* 5. Navratri Program / Puja Timeline */}
        <PujaSchedule />

        {/* 6. Donation / eSewa & Siddhartha Bank QR Section */}
        <DonationSection />

        {/* 7. Committee Section with Designated Positions */}
        <CommitteeSection />

        {/* 8. Photo Gallery with Fullscreen Lightbox */}
        <PhotoGallery />

        {/* 9. Dedicated Facebook Community Section */}
        <FacebookSection />

        {/* 10. Contact & Location Section */}
        <ContactLocation />
      </main>

      {/* 11. Footer with Dynamic Bikram Sambat Year */}
      <Footer />

      {/* 12. Floating Action Controls (Temple Bell & Quick QR) */}
      <FloatingActions />
    </div>
  );
}

export default App;
