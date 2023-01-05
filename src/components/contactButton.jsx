import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	buttons: {
		textAlign: "center",
		borderRadius: "var(--br-md)",
		border: "1px solid var(--grey-700)",
		width: "136px",
		padding: "var(--padding-3xs) var(--padding-sm)",
		cursor: "pointer",
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.primary.light,
		},
	},
}));

export default function ContactButton() {
	const styles = useStyles();
	return <Box className={styles.buttons}>Contact us</Box>;
}
