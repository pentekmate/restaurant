/** @type {import('tailwindcss').Config} */
export default {
  content: ["../src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "default-green": "#39DB4A",
        "default-white":"#fffffff",
        "text-black":"#272727"
      }
    },
  },
  plugins: [],
}

