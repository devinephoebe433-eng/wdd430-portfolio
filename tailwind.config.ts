import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fff8fb',
        ink: '#382536',
        plum: '#743d68',
        rose: '#d95d8b',
        blush: '#f7dce8',
        lavender: '#eee5f4',
        line: '#ead5e1',
        gold: '#b48652'
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif']
      },
      boxShadow: {
        soft: '0 18px 50px rgba(116, 61, 104, .12)'
      }
    }
  },
  plugins: []
};

export default config;
