import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
       'background': 'url("/img/background.png")',
       'overlay': 'linear-gradient(180deg, rgba(2,25,43,0.50) 0%, rgba(2,25,43,1) 100%)',
       'grad_primary': 'linear-gradient(152deg, rgba(79,208,120,1) 0%, rgba(7,155,163,1) 100%)',
      },
      backgroundColor: {
        'back_primary': '#02192B',
        'white_primary': '#f5f5f5',
        'primary': 'rgb(36, 153, 239)',
        'gray': 'rgba(162, 175, 193, 0.5)',
        'cancel': '#d3193e',
        'trans_gray': 'rgba(162, 175, 193, 0.2)',
        'trans_red': 'rgba(211, 25, 62, 0.2)',
        'trans_yellow': 'rgba(255, 193, 7, 0.2)',
        'trans_green': 'rgba(79, 208, 120, 0.2)',
        'green_primary': '#4fd078',
        'blue_primary': '#139E9F',
      },
      colors: {
        'white_primary': '#f5f5f5',
        'green_primary': '#4fd078',
        'red_primary': '#d3193e',
        'yellow_primary': '#ffc107',
      }
    },
  },
  plugins: [],
}
export default config
