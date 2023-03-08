/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      mainBg: "#010C17",
      cardBg: "#14222C",
      btnInput: "#23313C",
      white: "#f1f5f9",
      sideC: "#2563eb",
      red: "#ef4444",
    },
  },

  plugins: [require("daisyui")],
};
