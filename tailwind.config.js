/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue-1': '#BED7DC', // Lightest
        'custom-blue-2': '#B3C8CF',
        'custom-blue-3': '#7FA1C3',
        'custom-blue-4': '#8EACCD',
        'custom-blue-5': '#6482AD', // Darkest
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}