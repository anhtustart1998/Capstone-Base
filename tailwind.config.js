/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  mode: "jit",
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
