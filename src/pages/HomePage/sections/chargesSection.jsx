import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100%",
		background: "black",
		color: "white",
		borderRadius: theme.borderRadius.md,
		padding: theme.spacing(2, 2),
		"& > *": {
			lineHeight: "32px",
		},
		"&:hover": {
			background: theme.palette.grey[800],
		},
	},
}));

export default function ChargesSection() {
	const styles = useStyles();

	return (
		<Stack
			className={styles.container}
			spacing={2}
			direction={{ sm: "column", md: "row" }}
			justifyContent="space-around"
			padding={6}
			alignItems="center"
		>
			<Stack spacing={2}>
				<Typography variant="h5" fontWeight={600}>
					$50 for for all payin and payout transactions
				</Typography>
				<Typography
					variant="body2"
					fontWeight={200}
					lineHeight="32px"
					maxWidth="400px"
				>
					Using Juice rails, cross border payments is simple. See your transfers
					settle as soon as the next business hour. We offer clear pricing and
					no surprise fees.
				</Typography>
			</Stack>
			<Stack spacing={3} mt={4}>
				<Checkrizer content="Transfer and settlement in minutes" />
				<Checkrizer content="No monthly or hidden fees" />
				<Checkrizer content="End-to-end data security" />
			</Stack>
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
				width="15px"
				height="15px"
			/>

			<Typography variant="body1" fontWeight="300" ml={2}>
				{content}
			</Typography>
		</Stack>
	);
};
