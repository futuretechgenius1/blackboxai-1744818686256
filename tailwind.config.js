/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
        background: '#f3f4f6',
        textColor: '#1f2937',
        borderColor: '#e5e7eb',
        hoverColor: '#dbeafe',
      },
    },
  },
  plugins: [],
}
