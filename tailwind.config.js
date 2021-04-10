module.exports = {
    darkMode: 'class',
    important: true,
    purge: [
        './pages/**/*.{tsx,ts}',
        './src/**/*.{tsx,ts}'
    ],
    theme: {
        extend: {
            borderRadius: {
                xl: '0.9rem',
            },
            colors: {
                theme: {
                    primary: '#3C8FCE',
                    primarydark: '#3172A3',
                },
                black: {
                    base: '#000000',
                    darkest: '#000000',
                    darker: '#242424',
                    dark: '#2A2A2A',
                    medium: '#343434',
                },
                gray: {
                    dark: '#393939',
                    medium: '#A1A1A1',
                    light: '#BBBBBB',
                    lighter: '#E0E0E0',
                    lightest: '#EFEFEF',
                },
                white: {
                    base: '#FFFFFF'
                },
                green: {
                    base: '#2BC02B',
                    light: '#9AF654',
                },
                red: {
                    base: '#F52424',
                    primary: '#A60E27',
                },
            },
            height: {
                30: '30px',
                100: '100px',
                170: '170px',
                200: '200px',
                225: '225px',
                250: '250px',
                300: '300px',
                400: '400px',
            },
            width: {
                300: '300px',
            },
            screens: {
                xs: '420px',
                lg: '1100px',
                xl: '1100px',
            },
            margin: {
                '60': '60px',
                '75': '75px',
            },
            minHeight: {
                '25': '25px',
                '60': '60px',
                '175': '175px',
                '200': '200px',
                '230': '230px',
                '300': '300px',
                '400': '400px',
                '500': '500px',
            },
            maxHeight: {
                '75': '75px',
                '100': '100px',
                '200': '200px',
                '300': '300px',
                '400': '400px',
                '500': '500px',
                '600': '600px',
                '75%': '75%',
                '90%': '90%',
            },
            maxWidth: {
                '100': '100px',
                '400': '400px',
                'page': '1400px',
            },
            zIndex: {
                base: 0,
                content: 5,
                overlay: 100,
                absolute: 1000,
            }
        },
    },
    variants: {},
    plugins: []
};