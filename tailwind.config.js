/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    boxShadow: {
      pref: "1px 1px 15px 6px rgba(0,0,0,0.1)",
    },
    fontFamily: {
      sans: ["Inter", "Montserrat", "sans"],
      mono: ["Share Tech Mono", "Ubuntu Mono", "Roboto Mono"],
    },
    extend: {},
  },
  plugins: [],
};
