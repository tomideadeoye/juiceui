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
		fontFamily: theme.typography.fontFamily,
		padding: theme.spacing(2, 2),
		"& > *": {
			lineHeight: "32px",
		},
	},
}));

export default function BragSection2() {
	const styles = useStyles();

	return (
		<div className={styles.container}>
			<div className={styles.div}>
				<Grid container spacing={1}>
					<Grid item sm={12} md={4}>
						<Stack>
							<p>+70</p>
							<p>Countries supported for USD payments</p>
							<p>ALL BRAGGING RIGHTS UNRESERVED.*</p>
						</Stack>
					</Grid>
					<Grid item sm={12} md={4}>
						<Stack>
							<p>+100</p>
							<p>Countries supported for local payouts</p>
							<p>ALL BRAGGING RIGHTS UNRESERVED.*</p>
						</Stack>
					</Grid>{" "}
					<Grid item sm={12} md={4}>
						<Stack>
							<p>70%</p>
							<p>Quicker payout time</p>
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
