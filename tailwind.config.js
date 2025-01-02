/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{html,js,scss}', // Asegúrate de incluir tus rutas
      './views/**/*.html',
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#4caf50',                 // $primary-color
          'secondary': '#e74c3c',               // $secondary-color
          'accent': '#e74c3c',                  // $accent-color
          'text': '#34495e',                    // $text-color
          'light-gray': '#f1f1f1',              // $light-gray
          'fluor': '#00ff00',                   // $fluor
          'orange': '#ffbb33',                  // $orange
          'dark-green': 'rgba(0, 255, 0, 0.2)',  // $dark-green
          'dark-green-2': 'rgba(0, 255, 0, 0.1)',// $dark-green-2
          'black-transparent': 'rgba(0, 0, 0, 0.3)', // $black-transparent
          'black-transparent-2': 'rgba(0, 0, 0, 0.9)', // $black-transparent-2
          'black-transparent-3': 'rgba(0, 0, 0, 0.1)', // $black-transparent-3
          'red-pwr': '#ff0000',                 // $red-pwr

          'dark-gray': '#2c3e50',               // $dark-gray
          'transparent-grey': 'rgba(255, 255, 255, 0.2)', // $transparent-grey
          'light-black': '#1e1e1e',             // $light-black
          'off-white': '#f5f5f5',               // $off-white
          'complementary': '#9b59b6',            // $complementary-color
          'highlight-bg': '#f0f8ff',            // $highlight-bg
        },
      },
    },
    plugins: [],
  }
  