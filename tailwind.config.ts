import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        gray: {
          main: '#2C2C2C',
          mainDark: '#1E1E1E',
          border: '#D9D9D9',
          borderDark: '#828282',
          background: "#F2F2F2",
          backgroundDark: "#262626"
        }, 
        green: {
          main: '#00B169',
          ligth: "#D9D9D9",
        },
        red: {
          main: "#EF4949 ",
        }
      },
      screens: {
        sm: "320px",
        md: "600px",
        lg: "800px",
        xl: "1024px",
        "2xl": "1366px"
      }
    },
  },
  plugins: [],
}
export default config
