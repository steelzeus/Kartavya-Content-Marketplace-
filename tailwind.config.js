/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f0ff',
          100: '#e3e3ff',
          200: '#c9c9ff',
          300: '#a3a3ff',
          400: '#7575ff',
          500: '#4d4dff',
          600: '#2d2a8a',
          700: '#1f1d5c',
          800: '#14123d',
          900: '#0a0920'
        },
        accent: {
          50: '#fef2f7',
          100: '#fde6ef',
          200: '#fbc9de',
          300: '#f79bc4',
          400: '#f26ba7',
          500: '#e93b81',
          600: '#d91f6b',
          700: '#b8155a',
          800: '#9a1249',
          900: '#7d0f3a'
        },
        yellow: {
          50: '#fffef0',
          100: '#fffce0',
          200: '#fff8c1',
          300: '#fff2a1',
          400: '#ffeb82',
          500: '#ffcf59',
          600: '#e6b84f',
          700: '#cc9f45',
          800: '#b3873b',
          900: '#996f31'
        },
        mint: {
          50: '#f0fffe',
          100: '#e0fffc',
          200: '#c1fff9',
          300: '#a1fff6',
          400: '#82fff3',
          500: '#72e4c4',
          600: '#65cdb0',
          700: '#58b69c',
          800: '#4b9f88',
          900: '#3e8874'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-out',
        'shimmer': 'shimmer 2s linear infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        bounceGentle: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0,-8px,0)' },
          '70%': { transform: 'translate3d(0,-4px,0)' },
          '90%': { transform: 'translate3d(0,-2px,0)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}