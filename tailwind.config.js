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
			},

			animation: {
				marquee: 'marquee 60s linear infinite',
				marquee2: 'marquee2 60s linear infinite'
			},

			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' }
				}
			}
		}
	},
	plugins: []
};
