import React, { useCallback } from "react";

import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import Benefits from "../../../components/benefits";
import { Grid } from "@mui/material";

const useStyles = makeStyles(() => ({}));

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

	return (
		<div className={styles.content}>
			<b className={styles.benefits2} data-scroll-to="benefitsText">
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

				<div className={styles.div5}>
					<div className={styles.bg5} />
					<b className={styles.b}>+70</b>
					<div className={styles.countriesSupportedForUsdPa}>
						Countries supported for USD payments
					</div>
					<b className={styles.b1}>+100</b>
					<div className={styles.countriesSupportedForLocal}>
						Countries supported for local payouts
					</div>
					<b className={styles.b2}>70%</b>
					<div className={styles.quickerPayoutTime}>Quicker payout time</div>
					<div className={styles.allBraggingRightsUnreserved}>
						all bragging rights unreserved.*
					</div>
				</div>
			</div>
			<div className={styles.allTheGuidanceYoullNeed}>
				<div className={styles.bg12} data-scroll-to="bg1" />
				<img className={styles.imgIcon4} alt="" src="" />
				<div
					className={styles.buttonsbigprimarylabel1}
					onClick={onButtonsBigPrimaryLabelContainer1Click}
				></div>
			</div>
		</div>
	);
}
