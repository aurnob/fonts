/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './public/**/*.{php,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

