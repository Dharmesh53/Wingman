/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "serif"],
        mono: ["Fira Code", "monospace"],
        heading: ["Urbanist", "sans-serif"],
        parkinsans: ["Parkinsans", "serif"],
      },
    },
  },
  plugins: [],
};
