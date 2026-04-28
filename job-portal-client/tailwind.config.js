/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         primary: '#3B82F6', // blue-500
        accent: '#F97316',  // orange-500
        neutral: '#374151', // gray-700
        background: '#F9FAFB', // gray-50
      }
    },
  },
  plugins: [],
}

