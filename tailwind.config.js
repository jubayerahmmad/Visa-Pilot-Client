/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
