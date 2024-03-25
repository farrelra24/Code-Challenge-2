/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-patterns"),
    require("flowbite/plugin"),
  ],
};
