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
          primary: "#E1483F",

          secondary: "#ffffff",

          accent: "#facc15",

          neutral: "#1f181b",

          "base-100": "#222",

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
