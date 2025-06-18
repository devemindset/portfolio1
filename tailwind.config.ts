import type { Config } from 'tailwindcss'
import scrollbar from 'tailwind-scrollbar';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // très important pour analyser tes composants
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
      },
    },
  },
  plugins: [
   scrollbar({ nocompatible: true }), 
  ],
}

export default config
