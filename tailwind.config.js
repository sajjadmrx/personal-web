/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#0066ff",
                secondary: "#161B25",
                ctaGradientStart: "#176ae5",
                ctaGradientEnd: "#0066ff",
            },
            keyframes: {
                fadeIn: {
                    from: {
                        opacity: "0",
                    },
                    to: {
                        opacity: "1",
                    },
                },
            },
            animation: {
                fadeIn: "fadeIn 0.3s ease-in-out",
            },
        },
    },
    plugins: [
        require("daisyui"),
        require('flowbite/plugin'),
    ],
    daisyui: {
        themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    },
}
