const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        success: colors.green,
        danger: colors.red,
        base: colors.slate,
        primary: colors.blue,
      },
    },
  },
  plugins: [],
};
