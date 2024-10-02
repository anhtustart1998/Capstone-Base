/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  mode: "jit",
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
