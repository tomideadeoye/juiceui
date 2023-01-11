import { createTheme } from "@mui/material";

export default createTheme({
	typography: {
		fontFamily: "Roobert, sans-serif",
		fontSize: 18,
		h1: {
			fontSize: "5rem",
		},
		h2: {
			fontSize: "4rem",
		},
		h3: {
			fontSize: "3rem",
		},
		h4: {
			fontSize: "2.4rem",
		},
		h5: {
			fontSize: "2rem",
		},
		h6: {
			fontSize: "1.6rem",
		},
		subtitle1: {
			fontSize: "1.4rem",
		},

		button: {
			fontSize: "1rem",
			fontWeight: 500,
			fontFamily: "Roobert, sans-serif",
		},
	},
	palette: {
		primary: {
			main: "#b4abf4",
			light: "#f5f6f9",
			dark: "#7c74e9",
		},
		blue: {
			100: "#66c3fa",
			200: "#269afc",
			300: "#B9E9F2",
		},
		grey: {
			100: "#f5f6f9",
			200: "#f6f7f8",
			300: "#c1c9de",
			400: "#727998",
			500: "#838484",
			600: "#7c7c7c",
			700: "#434343",
			800: "#111",
		},
		secondary: {
			main: "#fac8ab",
		},

		pink: {
			main: "#d2c3f2",
		},
		white: {
			main: "#fff",
		},

		green: {
			100: "#e8fdec",
		},
		background: {
			default: "#f8f8f8",
		},
	},
	spacing: ["0px", "24px", "32px", "40px", "80px", "160px", "334px", "600px"],
	padding: {
		xs3: "9px",
		xs2: "10px",
		xs: "24px",
		sm: "27px",
		md: "28px",
		lg: "32px",
		xl: "40px",
		xl2: "64px",
	},
	borderRadius: {
		sm: "8px",
		md: "12px",
	},

	overrides: {
		MuiButton: {
			root: {
				padding: 24,
			},
		},
		MuiCard: {
			root: {
				borderRadius: 12,
			},
		},
		MuiPaper: {
			root: {
				padding: 32,
			},
		},
	},

	links: {
		textDecoration: "none",
		color: "inherit",
	},
});
