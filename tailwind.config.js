/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "capa": "url('/src/assets/Capa.svg')",
        "capa-mobile": "url('/src/assets/Capa-mb.svg')",
        "pixeo": "linear-gradient(180deg, #FF4970 0%, #FFC458 64.72%)",
      },
      colors: {
        primary: "#FF4970",
      },
    },
  },
  plugins: [],
};
