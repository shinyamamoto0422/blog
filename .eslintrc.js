module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["tailwindcss"],
  extends: [
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
};
