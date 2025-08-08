/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../../../../shared/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
