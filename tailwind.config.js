//setting external font in tailwind config
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'yeseva': ['Yeseva One', 'cursive'],
            'josefin': ['Josefin Sans', 'sans-serif'],
        },
    },
    plugins: [],
}