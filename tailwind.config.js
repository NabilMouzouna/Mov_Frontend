/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'mainBgColor':'#1e1e1e',
        'btnBgColor':'#007acc',
        'mainTextColor' : 'white',
        'secondaryTextColor' : '#808085'
      }
    },
  },
  plugins: [],
}
