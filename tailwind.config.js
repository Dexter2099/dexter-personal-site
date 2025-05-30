// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
        '3xl': '1600px',
      },
    },
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      screens: {
        'header-sm': '374px',
        'header-md': '799px',
        'header-lg': '1199px',
      },
      fontFamily: {
        // display: ["var(--font-sf)", "system-ui", "sans-serif"],
        // default: ["var(--font-inter)", "system-ui", "sans-serif"],
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        gray: colors.gray,
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          500: 'hsl(var(--primary-500))', // Add this line
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary))',
          foreground: 'hsl(var(--tertiary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.DEFAULT'),
              '&:hover': {
                filter: 'brightness(1.10)',
              },
              code: { color: theme('colors.primary.DEFAULT') },
            },
            p: {
              fontSize: '14px',
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            pre: {
              fontSize: '14px !important',
            },
            code: {
              color: theme('colors.primary.DEFAULT'),
              fontSize: 'inherit',
              fontWeight: '400',
              backgroundColor: theme('colors.primary.foreground'),
              borderWidth: '1px',
              borderColor: theme('colors.border'),
              fontFamily: 'inherit',
              borderRadius: '0.25rem',
              padding: '0.25rem 0.5rem',
            },
            'code::before': {
              display: 'none',
            },
            'code::after': {
              display: 'none',
            },
            img: {
              display: 'block',
              borderRadius: '0.5rem',
              borderWidth: '1px',
              borderColor: theme('colors.border'),
              margin: '1.5rem auto !important',
            },
            blockquote: {
              color: theme('colors.muted.foreground'),
              quotes: 'none',
              fontStyle: 'normal',
              borderLeftColor: theme('colors.border'),
            },
            hr: {
              borderColor: theme('colors.border'),
            },
            tr: {
              borderColor: theme('colors.border'),
            },
            thead: {
              borderColor: theme('colors.border'),
            },
            'li::marker': {
              color: theme('colors.muted.foreground'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.DEFAULT'),
              '&:hover': {
                filter: 'brightness(1.10)',
              },
              code: { color: theme('colors.primary.DEFAULT') },
            },
            p: {
              fontSize: '14px',
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        'fade-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(10px)',
          },
          '80%': {
            opacity: 0.6,
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)',
          },
        },
        'fade-down': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-10px)',
          },
          '80%': {
            opacity: 0.6,
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)',
          },
        },
        // Tooltip
        'slide-up-fade': {
          '0%': { opacity: 0, transform: 'translateY(6px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-down-fade': {
          '0%': { opacity: 0, transform: 'translateY(-6px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        movingBorders: {
          '0%, 90%': { borderColor: '#fce4e4' },
          '50%': { borderColor: '#ffd8d8' },
        },
        beatingHeart: {
          '0%, 30%, 60%': { transform: 'scale(1)' },
          '15%, 45%': { transform: 'scale(1.15)' },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        // Fade up and down
        'fade-up': 'fade-up 0.5s',
        'fade-down': 'fade-down 0.5s',
        // Tooltip
        'slide-up-fade': 'slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        movingBorders: 'movingBorders 3s infinite',
        beatingHeart: 'beatingHeart 1.2s infinite',
        'meteor-effect': 'meteor 5s linear infinite',
      },
      boxShadow: {
        inner: 'rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
      },
      transitionTimingFunction: {
        custom: 'cubic-bezier(0.68, -0.55, 0.27, 2.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
