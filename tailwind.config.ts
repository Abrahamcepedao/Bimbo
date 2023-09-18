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
        'back_secondary': '#0b2b44',
        'white_primary': '#f5f5f5',
        'primary': 'rgb(36, 153, 239)',
        'gray': 'rgba(162, 175, 193, 0.5)',
        'cancel': '#d3193e',
        'trans_gray': 'rgba(162, 175, 193, 0.2)',
        'trans_red': 'rgba(218, 0, 43, 0.5)',
        'trans_yellow': 'rgba(197, 147, 1, 0.5)',
        'trans_green': 'rgba(8, 203, 70, 0.5)',
        'green_primary': '#15ea4a',
        'blue_primary': '#15eaea',
        'blue_navy': '#153fea',
      },
      colors: {
        'white_primary': '#f5f5f5',
        'dark_primary': '#02192B',
        'green_primary': '#0fec0f',
        'red_primary': '#e61111',
        'yellow_primary': '#f7f70b',
      }
    },
  },
  plugins: [],
}
export default config
