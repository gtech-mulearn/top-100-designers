import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#3989FF",
        primaryBg: "#005AE5",
      },
      fontFamily: {
        gilroyBold: "var(--font-gilroy-bold)",
        gilroyMedium: "var(--font-gilroy-medium)",
      },
    },
  },
  plugins: [],
};
export default config;
