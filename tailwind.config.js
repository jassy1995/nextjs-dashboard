/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-150': '#F2F0F1',
        'slate-1000': '#000000',
        'slate-550': '#B8B8B8',
      },
      boxShadow: {
        'ss': '0 3px 5px 3px rgba(0, 0, 0, 0.03)',
      },
      screens: {
        xxxs: "200px",
        xxs: "337px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}
