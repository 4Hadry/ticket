/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          25: "#F5FEF8",
          50: "#EAFEF1",
          100: "#C8F9E8",
          200: "#94F3DA",
          300: "#5BDCC6",
          400: "#31BAAE",
          500: "#038C8C",
          600: "#026E78",
          700: "#015364",
          800: "#003C51",
          900: "#002C43",
        },
        Gray: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#E4E7EC",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        elevation: {
          0: "#121212",
          1: "#1E1E1E",
          2: "#232323",
          3: "#2B2B2B",
          4: "#343434",
          5: "#454545",
        },

        secondary: "#1D2939",
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
