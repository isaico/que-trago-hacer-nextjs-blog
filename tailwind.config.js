/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        screens: {
            sm: '400px',
            md: '768px',
            lg: '1024px',
            xl: '1440px',
        },
        colors: {
            'bg-dark': '#111827',
            'bg-white': '#ffff',
            'bg-white-dark': '#f3f3f3',
            primary: '#E74694',
            "primary-dark":"#a80059",
            "primary-light":"#ec84b7",
            "secondary":"#D61F69",
        },
        fontWeight:{
          semibold: 700,
          medium:500,
          normal:400,
          thin:200,
        },
       
    },
    darkMode: 'class',
    plugins: [require('flowbite/plugin')],
};
