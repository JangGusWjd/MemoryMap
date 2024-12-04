import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        customCoral: '#FF6969',
        customCoralLight: '#FF696915',
        customBlue: '69A5FF',
        customGray: '#929090',
        customGrayLight: '#F1F1F1',
        customBorderGray: '#CACACA',
      },
      borderRadius: {
        '15px': '15px',
      },
    },
  },
  plugins: [],
} satisfies Config
