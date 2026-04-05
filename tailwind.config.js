/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f6f3",  // off-white
        primary: "#111111",     // elegant black
        accent: "#d6c4b2",      // warm beige
      },
    },
  },
  plugins: [],
}
