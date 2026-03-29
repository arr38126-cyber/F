/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1a120b',
          gold: '#d4af37',
          brown: '#2d2013',
        }
      }
    },
  },
  plugins: [],
}

