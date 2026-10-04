/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1B4D3E',
        pine: '#0E3B2E',
        leaf: '#2E7D32',
        fresh: '#5A9E3F',
        moss: '#6B8F71',
        sage: '#EAF1EA',
        cream: '#FDFBF6',
        naturewhite: '#FDFBF6',
        sand: '#EEF3EC',
        fog: '#F3F5F1',
        mistgrey: '#E6ECE5',
        foresttext: '#1A2E22',
        earth: '#7A6A53',
        clay: '#8B6F47',
        skysoft: '#DCEBF5',
        skymist: '#DCEBF5',
        river: '#7FB8D1',
        // kept for compatibility with existing classes during migration
        youngleaf: '#9CCC65',
        success: '#43A047',
        amber: '#C99A2B',
        forestblack: '#0C1F18',
        jungle: '#132A22',
        canopy: '#1B4332',
        leafaccent: '#8FC7A3',
        skyglow: '#9AD3E8',
        carddark: '#12261E',
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(26,46,34,.06), 0 8px 24px -12px rgba(26,46,34,.18)',
        card: '0 1px 3px rgba(26,46,34,.08), 0 12px 32px -16px rgba(26,46,34,.22)',
        glow: '0 8px 24px -12px rgba(27,77,62,.25)',
        'glow-lg': '0 16px 40px -16px rgba(27,77,62,.28)',
        night: '0 12px 32px -16px rgba(0,0,0,.5)',
      },
      keyframes: {
        heroFade: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        kenburns: { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(1.06)' } },
      },
      animation: {
        heroFade: 'heroFade 1.6s ease both',
        kenburns: 'kenburns 12s ease-out both',
      },
    },
  },
  plugins: [],
};
