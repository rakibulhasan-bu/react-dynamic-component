/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-1000": "#3D5B2B",
        "gray-1000": '#F1F4D9',
        "green-1100": '#3D5B2B',
      },
    },
  },
  plugins: [],
}