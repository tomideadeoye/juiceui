import React from "react";

import { makeStyles } from "@mui/styles";
import Benefits from "../../../components/benefits";
import { Grid, Stack } from "@mui/material";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100%",
		fontFamily: theme.typography.fontFamily,

		"& > *:first-child": {
			fontSize: theme.typography.h3.fontSize,
		},
		// select second child
		"& > *:nth-child(2)": {
			fontSize: theme.typography.fontSize,
		},
	},
	goodMatchSection: {
		background: theme.palette.white.main,
		width: "100%",
		gap: theme.spacing(2),
		padding: theme.spacing(3, 3),
		margin: theme.spacing(3, 0),
		borderRadius: theme.borderRadius.md,
		"& > *:first-child": {
			fontSize: theme.typography.h5.fontSize,
		},
		"& > *:nth-child(2)": {
			fontSize: theme.typography.fontSize,
		},
		alignItems: "start",
	},
}));

export default function BenefitsSection() {
	const styles = useStyles();

	const benefitsData = [
		{
			icon: "../juiceiconstransactioninprogress88x886@2x.png",
			title: "Digital wallets",
			description:
				"Generate white label custodial wallets for your business and your  end users via our API. This wallet can receive digital currency on-chain and via regular bank transfer.",
		},
		{
			icon: "../icons8europe94-1@2x.png",
			title: "International payouts",
			description:
				"Frictionlessly move funds to major destinations in the world via our unified dashboard. We charge 0% in commission, only a per-transaction fee of $50 only.",
		},
		{
			icon: "../juiceiconstransactioninprogress88x88@2x.png",
			title: "Liquidity sourcing",
			description:
				"Maintain cash flow required for international payments. Juice will provide your business with cash available for swaps whenever you  want to make global payments.",
		},
		{
			icon: "../juiceiconstransactioninprogress88x884@2x.png",
			title: "Cross border remmittance",
			description:
				"Send money to major destinations in the world in either USD, or users local currency.",
		},
		{
			icon: "../juiceiconstransactioninprogress88x881@2x.png",
			title: "KYC & fraud checks",
			description:
				"Get your business and your users onboarded safely and compliantly, without all the frustrations. Maximize payments from legitimate customers and minimize fraud.",
		},
		{
			icon: "../juiceiconstransactioninprogress88x882@2x.png",
			title: "Payment gateway",
			description:
				"Avoid the collections difficulties in emerging markets. Enable fully compliant payment collections for your business. Accept payments from your users in both digital and.",
		},
	];

	return (
		<Stack className={styles.container} spacing={2}>
			<b className={styles.header} data-scroll-to="benefitsText">
				Benefits
			</b>
			<div className={styles.whyJuice}>Why Juice</div>
			<Grid container spacing={2}>
				{benefitsData.map((benefit, index) => {
					return (
						<Grid item xs={12} sm={6} key={index}>
							<Benefits key={benefit.title} data={benefit} />
						</Grid>
					);
				})}
			</Grid>
		</Stack>
	);
}
