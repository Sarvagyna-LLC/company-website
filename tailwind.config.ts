import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: '#A86523',
          foreground: 'white',
          hover: '#E9A319'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: '#FAD59A',
          foreground: '#A86523',
          light: '#FCEFCB'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'rgba(168, 101, 35, 0.2)',
        input: 'rgba(168, 101, 35, 0.1)',
        ring: '#A86523',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        gold: {
          primary: '#A86523',
          secondary: '#E9A319',
          accent: '#FAD59A',
          light: '#FCEFCB'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(90deg, #A86523 0%, #E9A319 50%, #A86523 100%)',
        'gradient-gold-shine': 'linear-gradient(to right, #A86523, #E9A319, #FAD59A, #E9A319, #A86523)',
        'gradient-gold-text': 'linear-gradient(to right bottom, #A86523, #E9A319, #FAD59A, #E9A319)',
        'hero-pattern': 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(252, 239, 203, 0.8))',
      },
      boxShadow: {
        'gold-soft': '0 4px 6px rgba(168, 101, 35, 0.1)',
        'gold-medium': '0 6px 12px rgba(168, 101, 35, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
