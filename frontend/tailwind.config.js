/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#020024', 
        'silver': '#C0C0C0',
        'dark-blue': '#000080',   
      },
    },
  },
  plugins: [],
}

