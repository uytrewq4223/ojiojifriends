/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // line-clamp プラグインを追加
  ],

  plugins: [
    require('tailwind-scrollbar-hide'), // 追加
  ],
}
