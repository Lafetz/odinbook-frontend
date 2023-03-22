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
      darkwhite: "#cbd5e1",
      sideC: "#2563eb",
      sideD: "#1d4ed8",
      red: "#ef4444",
      redD: "#991b1b",
    },
  },

  plugins: [require("daisyui")],
};
