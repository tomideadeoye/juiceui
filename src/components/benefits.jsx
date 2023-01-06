/* eslint-disable react/prop-types */
import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { AnimationMakerCards } from "./animations";

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
		},
	},

	juiceIconsTransactionIcon: {
		width: "11%",
	},
}));

export default function Benefits({ data }) {
	const styles = useStyles();
	return (
		<AnimationMakerCards>
			<Stack className={styles.container} spacing={2}>
				<img
					className={styles.juiceIconsTransactionIcon}
					alt="juiceIconsTransactionIcon"
					src={data.icon}
				/>
				<Typography variant="h6" color="text.secondary" fontWeight="bold">
					{data.title}
				</Typography>

				<Typography variant="body2" color="text.secondary" lineHeight="32px">
					{data.description}
				</Typography>
			</Stack>
		</AnimationMakerCards>
	);
}
