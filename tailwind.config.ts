import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/magento/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                monts: ["var(--font-montserrat)"],
                lato: ["var(--font-lato)"],
            },
            colors: {
                "gr-green": "#25A55F",
                "gr-bg-gray": "#F8F8F8",
            },
            spacing: {
                "28rem": "28rem",
            },
        },
    },
    plugins: [],
};
export default config;
