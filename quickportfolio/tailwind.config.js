const { FaRegIdBadge } = require("react-icons/fa");

// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    boxShadow: {
      "2xl": "25px 25px 50px 25px rgba(0,0,0,0.25)",
    },
  },
};
