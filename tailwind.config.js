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
        main01: "#0167AB",
        main02: "#2483C5",
        main03: "#32A2DB",
        main04: "#52B6E7",
        sub01: "#0e325a",
        sub02: "#123F6D",
        colorBombom: "#EFB4CA",
        colorDalbo: "#E2BD48",
        colorDuji: "#A78770",
        colorKu: "#b07f9a",
        colorPudding: "#9FB3D4",
      },
      fontSize: {
        'B-32': '32px',
        'B-28': ['28px', { lineHeight: '130%', letterSpacing: '-0.3px' }],
        'B-22': '22px',
        'B-20': '20px',
        'R-28': '28px',
        'R-20': '20px',
        'R-14': '14px',
        'R-12': '12px',
        'R-10': '10px',
      },
    },
  },
  plugins: [],
};
