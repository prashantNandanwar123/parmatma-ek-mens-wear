/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#4A1320', // deep kumkum maroon – replaces black everywhere
        saffron: { DEFAULT: '#E8741A', light: '#F2994F', dark: '#B85A10' }, // from the shop logo
        gold: { DEFAULT: '#C6A15B', dark: '#8F6F2E', light: '#E3CC9C' },
        cream: '#F8F6F1',
        charcoal: '#3A2226',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', '"Tiro Devanagari Hindi"', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', '"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
        deva: ['"Tiro Devanagari Hindi"', '"Noto Serif Devanagari"', 'serif'],
      },
    },
  },
  plugins: [],
}
