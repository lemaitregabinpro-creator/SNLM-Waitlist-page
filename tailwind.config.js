/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Échelle Slate - Backgrounds et surfaces (Luxe Tech)
        slate: {
          50: '#EAEAEF',   // Blanc cassé doux - Texte principal
          100: '#D4D4DA',  // Gris très clair
          200: '#BEBEC5',  // Gris clair
          300: '#A8A8B0',  // Gris moyen-clair
          400: '#9CA3AF',  // Gris moyen - Textes secondaires
          500: '#9CA3AF',  // Gris moyen - Textes secondaires (alias)
          600: '#7A7A85',  // Gris moyen-foncé
          700: '#45454F',  // Gris foncé - Textes tertiaires / Icônes inactives
          800: '#323238',  // Gris très foncé - Bordures subtiles / Survols de cartes
          900: '#28282D',  // Presque noir - Cartes / Sections
          950: '#1C1C21',  // Fond très sombre, presque noir - Body principal
        },
        // Échelle Gold - Couleur de marque (Luxe Tech)
        gold: {
          50: '#F5F0E5',   // Or très très clair
          100: '#EDE5D0',  // Or très clair
          200: '#E5D5B0',  // Or très clair - Reflets / Effets de lumière
          300: '#E5D5B0',  // Or très clair (alias)
          400: '#D4C095',  // Or clair - Texte mis en avant
          500: '#C8B58D',  // Or de base - Couleur de marque principale
          vivid: '#F59E0B',
          600: '#A69268',  // Or foncé - États :hover des boutons
          700: '#8B7854',  // Or très foncé
          800: '#6B5A40',  // Or sombre
          900: '#423825',  // Or très sombre - Fonds de badges / Tags
        },
        // Alias pour compatibilité - Cyan mappé sur Gold
        cyan: {
          50: '#F5F0E5',   // gold-50
          100: '#EDE5D0',  // gold-100
          200: '#E5D5B0',  // gold-200
          300: '#E5D5B0',  // gold-300
          400: '#D4C095',  // gold-400
          500: '#C8B58D',  // gold-500 (couleur de marque)
          600: '#A69268',  // gold-600
          700: '#8B7854',  // gold-700
          800: '#6B5A40',  // gold-800
          900: '#423825',  // gold-900
        },
        // Couleurs personnalisées pour référence directe
        primary: {
          gold: '#C8B58D',  // gold-500
          accent: '#D1A760', // Or accent (conservé pour compatibilité)
        },
        background: {
          dark: '#1C1C21',   // slate-950
          ui: '#28282D',     // slate-900
          chat: '#323238',   // slate-800
        },
        text: {
          light: '#EAEAEF',   // slate-50
          secondary: '#9CA3AF', // slate-400/500
        },
      },
      animation: {
        'scroll': 'scroll 20s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'text-gradient': 'text-gradient 8s linear infinite',
        'tilt': 'tilt 10s infinite linear',
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(5px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'text-gradient': {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(0.5deg)' },
          '75%': { transform: 'rotate(-0.5deg)' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
    dropShadow: {
      'gold-glow': '0 0 15px rgba(209, 167, 96, 0.5)',
    },
    boxShadow: {
      'gold-glow': '0 0 15px rgba(209, 167, 96, 0.5)',
    },
  },
  plugins: [],
}
