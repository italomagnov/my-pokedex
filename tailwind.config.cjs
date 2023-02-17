/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'app-bg': 'url(./assets/bg.png)',
            },
        },
    },
    plugins: [],
};
