module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Ensures it scans files in the app directory
    "./components/**/*.{js,ts,jsx,tsx}", // If you have components outside the app folder
  ],
  theme: {
    extend: {
      colors: {
        customBGColor: "#FEF9F3",
        customGreen01: "#00563B",
        customGreen02: "#009A44",
        customEWalletGreen: "#6f9761",
        customBankGreen: "#9dd28a",
        customCashGreen: "#c5ffb0",
        customBGGraph: "#0a1c02",
        customDarkerGreen: "#062d20",
      },
    },
  },
  plugins: [],
};
