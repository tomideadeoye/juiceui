/* eslint-disable react/prop-types */
import { Box, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import { AnimationMakerButton } from "./animations";

const useStyles = makeStyles((theme) => ({
	buttons: {
		textAlign: "center",
		borderRadius: theme.borderRadius.md,
		border: `1px solid ${theme.palette.grey[700]}`,
		padding: "10px 35px",
		cursor: "pointer",

		"&:hover": {
			backgroundColor: theme.palette.grey[800],
			color: theme.palette.white.main,
			boxShadow: "0px 0px 10px 0px grey",
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
		textDecoration: "none",

		"&:hover": {
			backgroundColor: theme.palette.primary.dark,
			color: theme.palette.white.main,
			boxShadow: "0px 0px 10px 0px grey",
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

export default function ContactButton({ color, label, link }) {
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
		<AnimationMakerButton>
			<Box
				to={link ? link : "/contact-us"}
				component={Link}
				sx={{
					textDecoration: "none",
					color: "inherit",
				}}

				// style={{ textDecoration: "none", color: "inherit" }}
			>
				<Stack className={colorHandler()} direction="row" spacing={1}>
					{label}
				</Stack>
			</Box>
		</AnimationMakerButton>
	);
}
