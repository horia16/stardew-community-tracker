module.exports = {
    mode: "jit",
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                // yellow: "#ffd84f",
                // "yellow-light": "#ffffcc",
                "blue-green": "#0D5D56",
                "shamrock-green": "#329F5B",
                brown: "#837569",
                green: "#8aaa79",
                "sea-green": "#0C8346",
                "olive-green": "#657153",
                "lavender-gray": "#b7b6c2",
                "light-gray": "#d1d5de"
            }
        },
        fontFamily: {
            star: ["Stardew Valley", "Arial", "Helvetica", "sans-serif"]
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
