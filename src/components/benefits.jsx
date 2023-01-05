/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	container: {
		background: theme.palette.white.main,
		borderRadius: theme.borderRadius.md,
		padding: theme.spacing(2, 2),

		"& > *": {
			lineHeight: "32px",
		},
	},

	juiceIconsTransactionIcon: {
		width: "9%",
	},
}));

export default function Benefits({ data }) {
	const styles = useStyles();
	return (
		<Stack className={styles.container} spacing={2}>
			<img
				className={styles.juiceIconsTransactionIcon}
				alt="juiceIconsTransactionIcon"
				src={data.icon}
			/>
			<b>{data.title}</b>
			<div className={styles.especiallyValuableForBusine}>
				{data.description}
			</div>
		</Stack>
	);
}
