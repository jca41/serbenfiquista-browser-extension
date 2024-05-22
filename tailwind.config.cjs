/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        benfica: {
          primary: "#ffffff",

          secondary: "#000000",

          accent: "#facc15",

          neutral: "#78716c",

          "base-100": "#c30100",

          info: "#1d4ed8",

          success: "#059669",

          warning: "#fbbf24",

          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

module.exports = config;
