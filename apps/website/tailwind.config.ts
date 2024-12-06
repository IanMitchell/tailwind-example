import reactAriaComponents from "tailwindcss-react-aria-components";

import { type Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindForms from "@tailwindcss/forms";

const config: Config = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			borderWidth: {
				"1": "1px",
			},
		},
		// fontFamily: {
		// 	mono: ["var(--font-berkeley)", ...defaultTheme.fontFamily.mono],
		// },
		// fontWeight: {
		// 	extralight: "100",
		// 	light: "110",
		// 	normal: "120",
		// 	medium: "130",
		// 	semibold: "140",
		// 	bold: "150",
		// },
	},
	plugins: [reactAriaComponents, tailwindForms, tailwindAnimate],
};

export default config;
