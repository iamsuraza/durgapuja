/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        temple: {
          maroon: '#450a0a',
          darkRed: '#7f1d1d',
          sindoor: '#991b1b',
          crimson: '#b91c1c',
          vermilion: '#c2410c',
          saffron: '#ea580c',
          amber: '#d97706',
          gold: '#f59e0b',
          lightGold: '#fef3c7',
          cream: '#fffdf5',
          creamDark: '#fef3c7',
          darkBg: '#1f090d',
          darkCard: '#2d0f14'
        }
      },
      fontFamily: {
        devanagari: ['"Noto Sans Devanagari"', 'sans-serif'],
        serifDeva: ['"Noto Serif Devanagari"', 'serif'],
        yatra: ['"Yatra One"', 'cursive', '"Noto Sans Devanagari"', 'sans-serif'],
        rozha: ['"Rozha One"', 'serif', '"Noto Serif Devanagari"', 'serif'],
      },
      boxShadow: {
        'gold': '0 4px 20px -2px rgba(245, 158, 11, 0.25)',
        'gold-lg': '0 10px 25px -3px rgba(245, 158, 11, 0.35)',
        'temple': '0 10px 30px -5px rgba(69, 10, 10, 0.3)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
        'crimson-gradient': 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #450a0a 100%)',
      }
    },
  },
  plugins: [],
}
