/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './components/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      // 1. DEFINIZIONE DEI COLORI PERSONALIZZATI
      colors: {
        'base-light': '#B0BFAE',    // Corrisponde a #4
        'block-main': '#50594F',    // Corrisponde a #5
        'block-alt': '#96A694',     // Corrisponde a #3
        'accent': '#677365',        // Corrisponde a #2
        'dark-base': '#262620',     // Corrisponde a #1 (Usato come sfondo scuro)
        'dark-block': '#3A423A',    // Variante più scura di block-main per il contrasto
        'dark-accent': '#C0C7C0',   // Variante chiara dell'accento per il testo scuro
        'text-light': '#262620',    // Testo nel tema chiaro (da #1)
        'text-dark': '#B0BFAE',     // Testo nel tema scuro (da #4)
      },
    },
  },
  plugins: [],
};