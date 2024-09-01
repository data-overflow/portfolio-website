/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#61dd97',
				doswhite: '#B4B3B4',
				secondary: '#e9d05e'
			},

			screens: {
				xs: '475px',
				'3xl': '1800px',
				'4xl': '2000px'
			}
		}
	},
	plugins: []
};
