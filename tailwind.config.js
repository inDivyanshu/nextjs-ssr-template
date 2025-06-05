/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      heading: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
      button: ['Poppins', 'sans-serif'],
      form: ['Open Sans', 'sans-serif'],
      mono: ['var(--font-geist-mono)', 'monospace'],
      sans: ['var(--font-geist-sans)', 'sans-serif'],
    },
    extend: {
      colors: {
        heading: '#435179',
        heading2: '#3E4954',
        tab: {
          bg: '#fff',
          border: '#E5EAF2',
          font: '#435179',
          active: {
            bg: '#F3F5FF',
            border: '#2F4CDD',
            font: '#2F4CDD',
          },
        },
        button: {
          blue: '#2F4CDD',
          blueBorder: '#2F4CDD',
          submit: '#175cff',
        },
        main: '#3E4954',
        input: {
          border: '#D6D6D6',
          bg: '#fff',
          font: '#3E4954',
        },
      },
      fontSize: {
        h1: ['30px', '36px'],
        h2: ['20px', '28px'],
        tab: ['15px', '24px'],
        button: ['16px', '24px'],
        buttonForm: ['15px', '26px'],
        main: ['14px', '24px'],
        label: ['14px', '24px'],
        input: ['15px', '24px'],
      },
      borderRadius: {
        input: '8px',
      },
      padding: {
        tab: '12px 20px',
        button: '12px 20px',
        input: '8px 16px',
      },
    },
  },
  plugins: [],
};
