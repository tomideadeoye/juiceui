import { Stack, Typography } from "@mui/material";
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
		padding: theme.spacing(3, 2),
		"& > *": {
			lineHeight: "32px",
		},

		"&:hover": {
			background: "#322e5d",
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
		<Stack className={styles.container} spacing={5} justifyContent="center">
			<Stack
				direction={{ sm: "column", md: "row" }}
				justifyContent="space-around"
				spacing={5}
			>
				{bragData.map((data) => {
					return (
						<Stack spacing={2} key={data.title}>
							<Typography variant="h4" fontWeight={600} mt={2}>
								{data.title}
							</Typography>
							<Typography variant="body2" fontWeight={200} maxWidth="160px">
								{data.description}
							</Typography>
						</Stack>
					);
				})}
			</Stack>

			<Typography
				fontSize="10px"
				fontWeight={100}
				letterSpacing=".5px"
				textAlign="center"
				mt={2}
			>
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
