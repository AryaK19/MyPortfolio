/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#dcfce7",
          200: "#bbf7d0",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        gitter: {
          "0%, 100%": { transform: "translate(0)" },
          "10%": { transform: "translate(-1px, 1px)" },
          "20%": { transform: "translate(1px, -1px)" },
          "30%": { transform: "translate(-1px, -1px)" },
          "40%": { transform: "translate(1px, 1px)" },
          "50%": { transform: "translate(-1px, -2px)" },
          "60%": { transform: "translate(1px, 2px)" },
          "70%": { transform: "translate(-1px, 1px)" },
          "80%": { transform: "translate(1px, -1px)" },
          "90%": { transform: "translate(-1px, 1px)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-medium": "spin 2s linear infinite",
        "spin-fast": "spin 1s linear infinite",
        gitter: "gitter 0.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
