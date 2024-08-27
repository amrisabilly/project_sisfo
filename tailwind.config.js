import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
              },
            colors: {
                darkFigma: '#010101',
                borderColor: '#4C4C4C',
                textColor: '#FFFEF9',
                yellowColor: '#F2E379',
            },
        },
    },

    plugins: [forms],
};
