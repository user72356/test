import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config =
{
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],

    theme: { extend: {} },

    darkMode: "class",

    plugins: [
        nextui({
            themes: {
                dark: {
                    colors: {
                        background: colors.neutral[900], 
                        foreground: colors.neutral[100], 
                        divider: colors.neutral[100], 
                    }
                }
            }

        })
    ]

};

export default config;
