/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poetsen: ['Poetsen One', 'sans-serif'],
      },
      colors: {
        primary: '#BCF2F6', // biru muda
        secondary: '#08C2FF', // biru tus
        third: '#FFF100', // kuning
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        }
      }
    },
  plugins: [],
  }
}