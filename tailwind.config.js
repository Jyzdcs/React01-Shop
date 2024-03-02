/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-yellow': '#ffb142',
        'yellow-b': '#cc8e35',
      }
    },
  },
  plugins: [],
}

