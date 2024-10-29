import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['var(--font-roboto)'],
            },
            colors: {
                violet: '#4900fa',
                'violet-hover': '#5c1afc',
                pink: '#cb00ee',
            },
            flex: {
                '2': '2 2 0%',
            },
            blur: {
                '6xl': '80px',
            },
        },
    },
    plugins: [],
}
export default config
