/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	buttons: {
		textAlign: "center",
		borderRadius: theme.borderRadius.md,
		border: `1px solid ${theme.palette.grey[700]}`,
		width: "136px",
		padding: "10px 20px",
		cursor: "pointer",

		"& > a": {
			textDecoration: "none",
			color: theme.palette.grey[700],
		},
		"&:hover": {
			backgroundColor: theme.palette.grey[800],
			color: theme.palette.white.main,
		},
	},
	dark: {
		fontFamily: theme.typography.fontFamily,
		padding: "15px 50px",
		borderRadius: theme.borderRadius.md,
		backgroundColor: theme.palette.grey[700],
		color: theme.palette.white.main,
		width: "fit-content",
		cursor: "pointer",
		"& > a": {
			color: theme.palette.white.main,
			textDecoration: "none",
			"&:hover": {
				backgroundColor: theme.palette.primary.dark,
				color: theme.palette.white.main,
			},
		},

		"&:hover": {
			backgroundColor: theme.palette.primary.dark,
		},
	},

	whiteBUtton: {
		padding: "15px 50px",
		borderRadius: theme.borderRadius.md,
		backgroundColor: theme.palette.white.main,
		color: theme.palette.grey[700],
		width: "fit-content",
		cursor: "pointer",
		fontWeight: theme.typography.fontWeightBold,
		"& > a": {
			color: theme.palette.grey[700],
			textDecoration: "underline",
		},
		fontFamily: theme.typography.fontFamily,

		"&:hover": {
			backgroundColor: theme.palette.primary.dark,
			color: theme.palette.white.main,

			"& > a": {
				color: theme.palette.white.main,
			},
		},
	},
}));

export default function ContactButton({ color, link, label }) {
	const styles = useStyles();

	function colorHandler() {
		if (color === "primary") {
			return styles.dark;
		} else if (color === "white") {
			return styles.whiteBUtton;
		}
		return styles.buttons;
	}

	return (
		<Stack className={colorHandler()} direction="row" spacing={1}>
			<a href={link}>{label}</a>
		</Stack>
	);
}
