import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // très important pour analyser tes composants
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(0.5rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        spinScale: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.2s ease-out',
        'spin-scale': 'spinScale 1.5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}

export default config
