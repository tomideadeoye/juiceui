/* eslint-disable react/prop-types */
import { Stack, Typography } from "@mui/material";
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
		"&:hover": {
			boxShadow: theme.shadows[2],
			margin: theme.spacing(3, 0),
		},
	},

	juiceIconsTransactionIcon: {
		width: "11%",
		[theme.breakpoints.down("md")]: {
			width: "80px",
		},
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
			<Typography variant="h6" fontWeight="bold">
				{data.title}
			</Typography>

			<Typography variant="body2" lineHeight="32px">
				{data.description}
			</Typography>
		</Stack>
	);
}
