/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'acustica-primary': '#47bfca',
        'acustica-secondary': '#fc6e55',
        'acustica-dark': '#07253B',
      }
    }
  },
  plugins: [],
}