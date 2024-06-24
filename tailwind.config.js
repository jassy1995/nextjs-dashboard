/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-150': '#F2F0F1',
      },
      boxShadow: {
        'ss': '0 3px 5px 3px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}
