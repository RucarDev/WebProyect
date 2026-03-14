/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f6f3",  // blanco roto
        primary: "#111111",     // negro elegante
        accent: "#d6c4b2",      // beige cheesecake
      },
    },
  },
  plugins: [],
}
