/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainColor: "var(--maincolor)",
        colorBombom: "var(--colorBombom)",
        colorDalbo: "var(--colorDalbo)",
        colorDuji: "var(--colorDuji)",
        colorKu: "var(--colorKu)",
        colorPudding: "var(--colorPudding)",
      },
    },
  },
  plugins: [],
};
