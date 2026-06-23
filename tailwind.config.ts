import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			brand: {
  				navy: '#111827',
  				gold: '#D4AF37',
  				ivory: '#F8F8F8',
  				charcoal: '#2D2D2D'
  			},
  		},
  		fontFamily: {
  			sans: ["var(--font-montserrat)", "sans-serif"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;