/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "720px",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        "dark-violet": "hsl(257, 27%, 26%)",
        "section-bg": "#f0f1f6",
        "grayish-violet": "hsl(257, 7%, 63%)",
        "very-dark-Blue": "hsl(255, 11%, 22%)",
        "very-dark-violet": "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};
