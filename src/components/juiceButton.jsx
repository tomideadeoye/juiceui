/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
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
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.primary.light,
		},
	},
	buttonsbigprimarylabelChild: {
		padding: "15px 50px",
		borderRadius: theme.borderRadius.md,
		backgroundColor: theme.palette.grey[700],
		color: theme.palette.white.main,
		width: "fit-content",
		cursor: "pointer",

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
		"& > a": {
			color: theme.palette.grey[700],
			textDecoration: "underline",
		},

		"&:hover": {
			backgroundColor: theme.palette.primary.dark,
		},
	},
}));

export default function ContactButton({ color, link, label }) {
	const styles = useStyles();

	function colorHandler() {
		if (color === "primary") {
			return styles.buttonsbigprimarylabelChild;
		} else if (color === "white") {
			return styles.whiteBUtton;
		}
		return styles.buttons;
	}

	return (
		<Box className={colorHandler()}>
			<a href={link}>{label}</a>
		</Box>
	);
}
