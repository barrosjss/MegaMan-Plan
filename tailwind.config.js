/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'module': '#00e5ff',
        'ai': '#bf5af2',
        'sdk': '#39ff14',
        'service': '#ffd60a',
        'role': '#ff6b35',
        'flow': '#ffffff',
        'bg-dark': '#0a0a0a',
        background: '#0a0a0a',
        text: '#ffffff',
        flow: '#ffffff',
      },
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 'box-shadow': '0 0 5px 2px rgba(191, 90, 242, 0.5)' },
          '50%': { 'box-shadow': '0 0 20px 5px rgba(191, 90, 242, 0.8)' },
        },
      },
      animation: {
        'glow-pulse': 'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
