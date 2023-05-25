/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        overlay: "#000000d9",
        button: "#394149",
      },
    },
    screens: {
      sm: { max: "480px" },
      md: { min: "480px" },
    },
  },
  plugins: [],
};
