import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'customBlue': '#E0EBFD',
        'backgroundColor': '#F6F6F6',
        'text-500': '#8D8D8D',
        'primaryColor': '#3D7CDB',
        'blue-100':'#E0EBFD',
        'blue-400' : '#8DB2E9'
      }
    },
  },
  plugins: [],
};
export default config;



