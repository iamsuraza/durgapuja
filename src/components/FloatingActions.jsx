import React, { useState } from 'react';
import { Heart, Bell, BellRing } from 'lucide-react';

export const FloatingActions = () => {
  const [isPlayingBell, setIsPlayingBell] = useState(false);

  // Synthesize an authentic temple bell chime using Web Audio API
  const playTempleBell = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      setIsPlayingBell(true);
      setTimeout(() => setIsPlayingBell(false), 2000);

      const now = ctx.currentTime;
      // Frequencies for bell harmonics: fundamental and overtones
      const frequencies = [587.33, 1174.66, 1762, 2349.32]; // D5 and harmonics

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = idx === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        // Exponential decay envelope like a brass temple bell
        const initialGain = 0.3 / (idx + 1);
        gain.gain.setValueAtTime(initialGain, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + (3.0 / (idx * 0.5 + 1)));

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 3.5);
      });
    } catch (e) {
      console.log('Audio playback error', e);
    }
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Temple Bell Chime Button */}
      <button
        type="button"
        onClick={playTempleBell}
        className={`group flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold transition-all duration-300 shadow-lg border border-amber-400 backdrop-blur-md ${
          isPlayingBell 
            ? 'bg-amber-400 text-red-950 scale-110' 
            : 'bg-temple-maroon/90 text-amber-200 hover:bg-temple-maroon hover:text-amber-100 hover:scale-105'
        }`}
        title="मन्दिरको घण्टी बजाउनुहोस्"
        aria-label="मन्दिरको घण्टी बजाउनुहोस्"
      >
        {isPlayingBell ? (
          <BellRing className="w-4 h-4 text-red-950 animate-bounce" />
        ) : (
          <Bell className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
        )}
        <span className="hidden sm:inline">मन्दिर घण्टी</span>
      </button>

      {/* Floating Donate CTA */}
      <a
        href="#donation"
        className="flex items-center gap-2 px-4 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-red-950 shadow-gold hover:shadow-gold-lg hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-amber-200 animate-pulse"
        title="धार्मिक कार्यमा सहयोग गर्नुहोस्"
        aria-label="धार्मिक कार्यमा सहयोग गर्नुहोस्"
      >
        <Heart className="w-4 h-4 fill-red-950 text-red-950" />
        <span>सहयोग (QR)</span>
      </a>

    </div>
  );
};
