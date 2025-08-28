/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D9B8A",
        secondary: "#21201C",
        sub_heading: "#63635E",
        card: "#1c1e20",
        bg: "#121212",
        light_text: "#8D95A5",
        title_text: "white",
      },
    },
  },
  plugins: [],
};
