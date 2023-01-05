import { Grid, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
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
	},
}));

export default function ChargesSection() {
	const styles = useStyles();

	return (
		<div className={styles.container}>
			<div className={styles.div}>
				<div className={styles.usingJuiceRailsCrossBorde}>
					<b className={styles.forForAllPayinAndPayoutT}>
						$50 for for all payin and payout transactions
					</b>
				</div>
				<Grid container spacing={2}>
					<Grid item sm={12} md={6}>
						<p className={styles.seeYourTransfers}>
							Using Juice rails, cross border payments is simple. <br />
							See your transfers settle as soon as the next business hour. We
							offer clear pricing and no surprise fees.
						</p>
					</Grid>
					<Grid item sm={12} md={6}>
						<Stack className={styles.checkmarks}>
							<Checkrizer content="Transfer and settlement in minutes" />
							<Checkrizer content="No monthly or hidden fees" />
							<Checkrizer content="End-to-end data security" />
						</Stack>
					</Grid>
				</Grid>
			</div>
		</div>
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
