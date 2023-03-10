/* eslint-disable linebreak-style */
/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: [
        './pages/*.{ts,tsx,js,jsx}',
        './components/**/*.{ts,tsx,js,jsx}',
    ],
    extend: {
   
    },
    theme: {
        screens: {
            'sm': { 'max': '600px' },
            'md': { 'max': '720px' },
            'lg': { 'max': '1200px' },
            'xl': { 'max': '1439px' },
            'xsm':{'min':'220px', 'max':'450px'},    
        },
        extend: {
            fontFamily: {
                abc:[ 'Sofia Sans', 'sans-serif'],
                title: ['Roboto', 'sans-serif'],
                subTitle: ['Roboto', 'sans-serif'],
                navLogo:['Raleway']
            },
            fontSize: {
                'headingFont':['48px','56px'],
                'subTitleFont': ['16px', '19px'],
                'titleFont': ['30px', '35px'],
                'inputFont':['14px', '16px']
            },
            fontWeight: {
                'subTitle': '400px',
                'title': '700px',
            },
            screens: {
                'tall': { 'raw': '(min-height: 400px)' },
                // => @media (min-height: 800px) { ... }
            },
        },
    },
    plugins: [],
};
