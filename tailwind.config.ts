
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#0b2240', // dark blue (CTA)
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: '#faf6ef', // beige
          foreground: 'hsl(var(--secondary-foreground))'
        },
        accent: {
          DEFAULT: '#dff5ea', // light green
          foreground: '#157a53'
        },
        card: {
          DEFAULT: '#fff',
        }
      },
      borderRadius: {
        lg: '1.25rem',
        md: '1rem',
        sm: '0.75rem'
      },
      boxShadow: {
        soft: '0 4px 24px 0 rgb(50 50 93 / 6%)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
