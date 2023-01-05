import React, { useCallback } from "react";

import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import Benefits from "../../../components/benefits";
import { Box, Grid, Stack } from "@mui/material";
import JuiceAccordion from "../../../components/muiAccordion";
import ContactButton from "../../../components/contactButton";
import BragSection2 from "./bragSection2";

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
	const navigate = useNavigate();

	// const onButtonsBigSecondaryContainerClick = useCallback(() => {
	// 	navigate("/contact-us");
	// }, [navigate]);

	const onButtonsBigPrimaryLabelContainer1Click = useCallback(() => {
		navigate("/contact-us");
	}, [navigate]);

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

	const accordionData = [
		{
			title: "Operating businesses",
			description:
				"Juice is a payment platform that enables businesses to send and receive payments globally. We are a licensed payment institution regulated by the Central Bank of Nigeria (CBN).",
		},

		{
			title: "Finance Managers",
			description: "",
		},
		{
			title: "BDCs and IMTOs",
			description: "",
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

			<div className={styles.paymentSolutionsForDiverse}>
				<div className={styles.discoverHowWeHelpSomeOfAParent}>
					<div className={styles.discoverHowWeHelpSomeOfA}>
						Discover how we help some of Africa’s leading businesses
					</div>
					<b
						className={styles.paymentSolutionsForDiverse1}
						data-scroll-to="paymentSolutionsFor"
					>
						Payment solutions for diverse use cases
					</b>
				</div>
				<JuiceAccordion data={accordionData} />
				<Stack className={styles.goodMatchSection}>
					<Box>Not sure if you’re a good match?</Box>
					<Box>
						Want us to take a closer look at your idea and how you can utilize
						our products? Let’s discuss in detail.
					</Box>
					<ContactButton
						label="Contact us"
						link="/contact-us"
						color="primary"
					/>
				</Stack>
				<BragSection2 />
			</div>
			<div className={styles.allTheGuidanceYoullNeed}>
				<div className={styles.bg12} data-scroll-to="bg1" />
				<img className={styles.imgIcon4} alt="" src="" />
				<div
					className={styles.buttonsbigprimarylabel1}
					onClick={onButtonsBigPrimaryLabelContainer1Click}
				></div>
			</div>
		</Stack>
	);
}
