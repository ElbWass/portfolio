/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#8892b0",
        tertiary: "#112240",
        "black-100": "#071526",
        "black-200": "#0a192f",
        "white-100": "#FFFFFF",
        brand: {
          teal: "#64ffda",
          blue: "#0ea5e9",
          "dark-navy": "#0a192f",
          pink: "#f472b6",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #64ffda30",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
