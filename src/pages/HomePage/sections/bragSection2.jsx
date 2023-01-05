import { Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

const useStyles = makeStyles((theme) => ({
	container: {
		// width: "100%",
		background: theme.palette.grey[800],
		color: "white",
		borderRadius: theme.borderRadius.md,
		fontFamily: theme.typography.fontFamily,
		padding: theme.spacing(2, 2),
		"& > *": {
			lineHeight: "32px",
		},
	},
}));

export default function BragSection2() {
	const styles = useStyles();

	const bragData = [
		{
			title: "+70",
			description: "Countries supported for USD payments",
		},
		{
			title: "+100",
			description: "Countries supported for local payouts",
		},
		{
			title: "70%",
			description: "Quicker payout time",
		},
	];

	return (
		<Stack className={styles.container} spacing={4}>
			<Grid container spacing={1}>
				{bragData.map((data) => {
					return (
						<Grid item sm={12} md={4} key={data.title}>
							<Stack spacing={2}>
								<Typography variant="h5" fontWeight={600}>
									{data.title}
								</Typography>
								<Typography variant="body2" fontWeight={200} maxWidth="160px">
									{data.description}
								</Typography>
							</Stack>
						</Grid>
					);
				})}
			</Grid>
			<Typography fontSize="10px" fontWeight={100} letterSpacing=".5px">
				ALL BRAGGING RIGHTS UNRESERVED.*
			</Typography>
		</Stack>
	);
}

// eslint-disable-next-line react/prop-types
export const Checkrizer = ({ content }) => {
	return (
		<Stack direction="row">
			<img
				// className={styles.juiceIconsPaymentTriggered}
				alt=""
				src="../juiceiconspaymenttriggered88x88-1@2x.png"
				width="5%"
			/>
			<Box ml={2}>{content}</Box>
		</Stack>
	);
};
