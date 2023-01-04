import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
// import styles from "../pages/Main.module.css";

const useStyles = makeStyles(() => ({
	buttons: {
		textAlign: "center",
		borderRadius: "var(--br-md)",
		border: "1px solid var(--grey-700)",
		width: "136px",
		padding: "var(--padding-3xs) var(--padding-sm)",
		cursor: "pointer",
	},
}));

export default function ContactButton() {
	const styles = useStyles();
	return <Box className={styles.buttons}>Contact us</Box>;
}
