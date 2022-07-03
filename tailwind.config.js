module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      greycliff: ["Greycliff", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
