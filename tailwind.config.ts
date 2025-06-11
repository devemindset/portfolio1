import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // très important pour analyser tes composants
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
}

export default config
