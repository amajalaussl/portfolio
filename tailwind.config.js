/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F1F9',
          100: '#CCE4F3',
          200: '#99C8E7',
          300: '#66ADDB',
          400: '#3391CF',
          500: '#0077B6',
          600: '#005F92',
          700: '#00476D',
          800: '#002E49',
          900: '#001824',
        },
        secondary: {
          50: '#E6EEF6',
          100: '#CCDDED',
          200: '#99BBDB',
          300: '#6699C9',
          400: '#3377B7',
          500: '#023E8A',
          600: '#02326E',
          700: '#012553',
          800: '#011937',
          900: '#000C1C',
        },
        accent: {
          50: '#FFF1E6',
          100: '#FFE3CC',
          200: '#FFC699',
          300: '#FFAA66',
          400: '#FF8D33',
          500: '#FB8500',
          600: '#CC6A00',
          700: '#995000',
          800: '#663500',
          900: '#331A00',
        },
        success: {
          50: '#E8FBF6',
          100: '#D0F7ED',
          200: '#A1EFDB',
          300: '#71E7C9',
          400: '#42DFB6',
          500: '#06D6A0',
          600: '#05AB80',
          700: '#048060',
          800: '#025640',
          900: '#012B20',
        },
        warning: {
          50: '#FFFBE6',
          100: '#FFF8CC',
          200: '#FFF199',
          300: '#FFEA66',
          400: '#FFE333',
          500: '#FFDD00',
          600: '#CCB000',
          700: '#998400',
          800: '#665800',
          900: '#332C00',
        },
        error: {
          50: '#FDEEF0',
          100: '#FBDDE1',
          200: '#F7BBC3',
          300: '#F39AA5',
          400: '#EF7887',
          500: '#EF476F',
          600: '#EA1744',
          700: '#B8102F',
          800: '#860B22',
          900: '#550716',
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        }
      }
    },
  },
  plugins: [],
};