/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          dark: '#404E3B',       // Deep forest / moss dark green
          primary: '#7B9669',    // Olive / sage green
          slate: '#6C8480',      // Slate moss green
          sage: '#BAC8B1',       // Pale sage green
          light: '#E6E6E6',      // Light neutral gray
          bg: '#F5F7F4',         // Soft sage tinted background
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'portal': '0 2px 10px rgba(64, 78, 59, 0.07), 0 1px 3px rgba(64, 78, 59, 0.04)',
        'portal-hover': '0 10px 25px -5px rgba(64, 78, 59, 0.14), 0 8px 10px -6px rgba(64, 78, 59, 0.06)',
      },
    },
  },
  plugins: [],
};
