import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#18211f',
        paper: '#f5f1e8',
        signal: '#c2410c',
        moss: '#365b4d',
        line: '#d9d0c0'
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif']
      }
    }
  },
  plugins: []
};

export default config;
