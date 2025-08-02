import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // très important pour analyser tes composants
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
        'spin-scale': 'spin-scale 1s linear infinite',
        'pulse-glow': 'pulseGlow 1.5s ease-in-out infinite'
      },
      keyframes: {
        'spin-scale': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scaleX(1)', opacity: 0.5 },
          '50%': { transform: 'scaleX(1.3)', opacity: 1 },
        },
      },
      colors: {
      'header-bg': 'var(--background-element)',
      'icon-active': 'var(--text-active)',
      'avatar-border': 'var(--border-color)',
    }
      
    },
  },
  plugins: [
   
  ],
}

export default config
