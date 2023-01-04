import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
// import styles from "./Main.module.css";
import React from "react";
import HeroSection from "./sections/heroSection";
import Benefits from "../../components/benefits";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Stack } from "@mui/material";

const useStyles = makeStyles((theme) => ({
	main: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
		gap: "var(--gap-0)",
		backgroundColor: "var(--grey-100)",
		width: "100%",
		overflow: "hidden",
		textAlign: "left",
		fontSize: "var(--font-size-base)",
		color: "var(--grey-700)",
		fontFamily: "var(--button-primary)",
	},
	content: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
		gap: "var(--gap-0)",
		width: "100%",
	},

	acceptAndProcessPaymentsInWrapper: {
		display: "flex",
		flexDirection: "row",
		padding: "var(--padding-2xl) 0",
		boxSizing: "border-box",
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},

	acceptProcessPaymentsSection: {
		padding: theme.spacing(2, 5),
		// select the first child of the section
		"& > *:first-child": {
			fontSize: "var(--font-size-2xl)",
			lineHeight: "54px",
			width: "50%",
			margin: theme.spacing(0, 0, 2, 0),
			[theme.breakpoints.down("md")]: {
				fontSize: "var(--font-size-xl)",
				lineHeight: "42px",
				width: "100%",
			},
		},
	},
	speedySettlementsSection: {
		borderRadius: "var(--br-md)",
		backgroundColor: "var(--white)",
		backdropFilter: "blur(40px)",
		padding: theme.spacing(2, 2),
		height: "100%",
		"& > *": {
			lineHeight: "42px",
		},
	},

	youAreInControl: {
		display: "flex",
		backgroundColor: theme.palette.primary.dark,
		padding: theme.spacing(2, 2, 0, 2),
		borderRadius: "var(--br-md)",
		color: "var(--white)",
		lineHeight: "32px",
	},
}));

const Main = () => {
	const styles = useStyles();
	const navigate = useNavigate();

	const onFrameContainer2Click = useCallback(() => {
		window.open("https://docs.spendjuice.org/docs");
	}, []);

	const onButtonsBigSecondaryContainerClick = useCallback(() => {
		navigate("/contact-us");
	}, [navigate]);

	const onButtonsBigPrimaryLabelContainer1Click = useCallback(() => {
		navigate("/contact-us");
	}, [navigate]);

	const benefitsArray = [
		{
			icon: "../juiceiconstransactioninprogress88x881@2x.png",
			title: "Security Enabled",
			description:
				"Juice delivers a frictionless flow that offers many layers of protection without sacrificing user experience. Accrue way less in operational expenses associated with fraud investigations.",
		},

		{
			icon: "../juiceiconstransactioninprogress88x88@2x.png",
			title: "Great pricing",
			description:
				"Especially valuable for businesses processing huge volumes at high frequencies, Juice charges a flat fee per transaction. No percentage or any surprise monthly fees.",
		},
	];

	return (
		<Stack className={styles.main}>
			<HeroSection />
			<Stack className={styles.acceptProcessPaymentsSection} spacing={2}>
				<Box>Accept and process payments in a secure and scalable way</Box>
				<Grid container spacing={2} className={styles.speedySettlementsSection}>
					<Grid item sm={12} md={6}>
						<Stack>
							<b className={styles.speedySettlements}>Speedy settlements</b>
							<p className={styles.usingJuiceRails}>
								Legacy payments take up to 4 business days to settle. With
								Juice’s rapid payment system, payments settle in only a couple
								of hours. Save time and effort with effective scheme management,
								and timely settlement.
							</p>
						</Stack>
					</Grid>
					<Grid item sm={12} md={6}>
						<Box
							sx={{
								backgroundImage: `url(../img2@2x.png)`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								height: "100%",
								width: "100%",
							}}
						/>
					</Grid>
				</Grid>
				{/* YOUR ARE IN CONTROL SECTION */}
				<Stack className={styles.youAreInControl}>
					<b className={styles.forForAllPayinAndPayoutT}>You’re in control</b>

					<Grid container spacing={5}>
						<Grid item sm={12} lg={6}>
							One robust dashboard to manage all your finance operations within
							our ecosystem
						</Grid>
						<Grid item sm={12} lg={6}>
							With both top-level and indepth transaction history view on the
							dashboard, Juice helps finance teams reconcile transactions
							efficiently and conveniently.
						</Grid>
					</Grid>

					<img
						className={styles.imgIcon1}
						alt=""
						src="../img1@2x.png"
						width="100%"
					/>
				</Stack>

				<Grid container spacing={2}>
					<Grid item sm={12} md={6}>
						<Benefits data={benefitsArray[0]} />
					</Grid>
					<Grid item sm={12} md={6}>
						<Benefits data={benefitsArray[1]} />
					</Grid>
				</Grid>
			</Stack>

			{/* CHARGES */}

			<div className={styles.content}>
				<div className={styles.acceptAndProcessPaymentsInWrapper}>
					<div className={styles.div}>
						<div className={styles.bg} />
						<div className={styles.usingJuiceRailsCrossBorde}>
							<b className={styles.forForAllPayinAndPayoutT}>
								$50 for for all payin and payout transactions
							</b>
						</div>
						<Grid container spacing={2}>
							<Grid item sm={12} md={6}>
								<p className={styles.seeYourTransfers}>
									Using Juice rails, cross border payments is simple. <br />
									See your transfers settle as soon as the next business hour.
									We offer clear pricing and no surprise fees.
								</p>
							</Grid>
							<Grid item sm={12} md={6}>
								<Stack className={styles.checkmarks}>
									<img
										className={styles.juiceIconsPaymentTriggered}
										alt=""
										src="../juiceiconspaymenttriggered88x88-1@2x.png"
										width="10%"
									/>
									<div className={styles.transferAndSettlementInMin}>
										Transfer and settlement in minutes{" "}
									</div>
									<div className={styles.noMonthlyOrHiddenFeesParent}>
										<div className={styles.transferAndSettlementInMin}>
											No monthly or hidden fees
										</div>
										<div className={styles.icons88success}>
											<img
												className={styles.juiceIconsPaymentTriggered}
												alt=""
												src="../juiceiconspaymenttriggered88x88-1@2x.png"
												width="10%"
											/>
										</div>
									</div>
									<div className={styles.endToEndDataSecurityParent}>
										<div className={styles.transferAndSettlementInMin}>
											End-to-end data security
										</div>
										<div className={styles.icons88success}>
											<img
												className={styles.juiceIconsPaymentTriggered}
												alt=""
												src="../juiceiconspaymenttriggered88x88-1@2x.png"
												width="10%"
											/>
										</div>
									</div>
								</Stack>
							</Grid>
						</Grid>
					</div>
				</div>

				<div className={styles.higherLevelsOfOperationalE}>
					<img
						className={styles.imgIcon3}
						alt=""
						src="../img3@2x.png"
						width="10%"
					/>
					<div className={styles.bg4} data-scroll-to="bg" />
					<div className={styles.buttons1}>
						<div className={styles.buttonsbigprimarylabelChild}>
							<div className={styles.buttonsbigprimarylabelIconChild} />
							<div
								className={styles.submitParent}
								onClick={onFrameContainer2Click}
							>
								<b className={styles.submit2}>Documentation</b>
								<img
									className={styles.icons24externalLink}
									alt=""
									src="../icons24externallink.svg"
								/>
							</div>
						</div>
					</div>
					<div className={styles.checkmarks1}>
						<div className={styles.thousandOfSuccessfulPayoutsParent}>
							<div className={styles.thousandOfSuccessfulPayouts}>
								Thousand of successful payouts
							</div>
							<div className={styles.icons88success}>
								<img
									className={styles.juiceIconsPaymentTriggered}
									alt=""
									src="../juiceiconspaymenttriggered88x88-1@2x.png"
								/>
							</div>
						</div>
						<div className={styles.complianceRiskExpertsParent}>
							<div
								className={styles.thousandOfSuccessfulPayouts}
							>{`Compliance & risk experts`}</div>
							<div className={styles.icons88success}>
								<img
									className={styles.juiceIconsPaymentTriggered}
									alt=""
									src="../juiceiconspaymenttriggered88x88-1@2x.png"
								/>
							</div>
						</div>
						<div className={styles.roundTheClockSupportParent}>
							<div className={styles.thousandOfSuccessfulPayouts}>
								Round the clock support
							</div>
							<div className={styles.icons88success}>
								<img
									className={styles.juiceIconsPaymentTriggered}
									alt=""
									src="../juiceiconspaymenttriggered88x88-1@2x.png"
								/>
							</div>
						</div>
					</div>
					<div className={styles.juiceIsAnEcosystemOfServi1}>
						Juice is an ecosystem of services making business cross border
						payment less complex, more reliable and compliant than ever before.
					</div>
					<b
						className={styles.higherLevelsOfOperationalE1}
					>{`Higher levels of operational efficiency with our API suite `}</b>
				</div>
				<div className={styles.benefitsWrapper}>
					<div className={styles.benefits1}>
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
							<div className={styles.quickerPayoutTime}>
								Quicker payout time
							</div>
							<div className={styles.allBraggingRightsUnreserved}>
								all bragging rights unreserved.*
							</div>
						</div>
						<div className={styles.div6}>
							<div className={styles.bg6} />
							<div className={styles.juiceDeliversAFrictionless}>
								Avoid the collections difficulties in emerging markets. Enable
								fully compliant payment collections for your business. Accept
								payments from your users in both digital and.
							</div>
							<b className={styles.greatPricing}>Payment gateway</b>
							<img
								className={styles.juiceIconsTransactionInPro2}
								alt=""
								src="../juiceiconstransactioninprogress88x882@2x.png"
							/>
						</div>
						<div className={styles.div7}>
							<div className={styles.bg6} />
							<b className={styles.kycFraudChecks}>{`KYC & fraud checks`}</b>
							<img
								className={styles.juiceIconsTransactionInPro2}
								alt=""
								src="../juiceiconstransactioninprogress88x881@2x.png"
							/>
							<div className={styles.getYourBusinessAndYourUse}>
								Get your business and your users onboarded safely and
								compliantly, without all the frustrations. Maximize payments
								from legitimate customers and minimize fraud.
							</div>
						</div>
						<div className={styles.div8}>
							<div className={styles.bg6} />
							<b className={styles.kycFraudChecks}>Cross border remmittance</b>
							<img
								className={styles.juiceIconsTransactionInPro2}
								alt=""
								src="../juiceiconstransactioninprogress88x884@2x.png"
							/>
							<div
								className={styles.getYourBusinessAndYourUse}
							>{`Send money to major destinations in the world in either USD, or users local currency. `}</div>
						</div>
						<div className={styles.div9}>
							<div className={styles.bg6} />
							<b className={styles.kycFraudChecks}>Liquidity sourcing</b>
							<img
								className={styles.juiceIconsTransactionInPro2}
								alt=""
								src="../juiceiconstransactioninprogress88x88@2x.png"
							/>
							<div className={styles.getYourBusinessAndYourUse}>
								Maintain cash flow required for international payments. Juice
								will provide your business with cash available for swaps
								whenever you want to make global payments.
							</div>
						</div>
						<div className={styles.div10}>
							<div className={styles.bg6} />
							<b className={styles.kycFraudChecks}>International payouts</b>
							<img
								className={styles.icons8Europe941}
								alt=""
								src="../icons8europe94-1@2x.png"
							/>
							<div className={styles.getYourBusinessAndYourUse}>
								Frictionlessly move funds to major destinations in the world via
								our unified dashboard. We charge 0% in commission, only a
								per-transaction fee of $50 only.
							</div>
						</div>
						<div className={styles.div11}>
							<div className={styles.bg6} />
							<div className={styles.juiceDeliversAFrictionless}>
								Generate white label custodial wallets for your business and
								your end users via our API. This wallet can receive digital
								currency on-chain and via regular bank transfer.
							</div>
							<b className={styles.greatPricing}>Digital wallets</b>
							<img
								className={styles.juiceIconsTransactionInPro2}
								alt=""
								src="../juiceiconstransactioninprogress88x886@2x.png"
							/>
						</div>
						<div className={styles.whyJuice}>Why Juice</div>
						<b className={styles.benefits2} data-scroll-to="benefitsText">
							Benefits
						</b>
					</div>
				</div>
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
					<div className={styles.useCasesParent}>
						<div className={styles.useCases1}>
							<b className={styles.operatingBusinesses}>Operating businesses</b>
							<img
								className={styles.buttonsicon}
								alt=""
								src="../buttonsicon.svg"
							/>
						</div>
						<div className={styles.div12}>
							<div className={styles.financeManagersParent}>
								<b className={styles.financeManagers}>Finance managers</b>
								<img
									className={styles.buttonsicon1}
									alt=""
									src="../buttonsicon.svg"
								/>
							</div>
						</div>
						<div className={styles.div12}>
							<div className={styles.financeManagersParent}>
								<b className={styles.financeManagers}>BDCs and IMTOs</b>
								<img
									className={styles.buttonsicon1}
									alt=""
									src="../buttonsicon.svg"
								/>
							</div>
						</div>
						<div className={styles.div14}>
							<div className={styles.notSureIfYoureAGoodMatcWrapper}>
								<b className={styles.notSureIfYoureAGoodMatc}>
									Not sure if you’re a good match?
								</b>
							</div>
							<div className={styles.wantUsToTakeACloserLookParent}>
								<div className={styles.wantUsToTakeACloserLook}>
									Want us to take a closer look at your idea and how you can
									utilize our products? Let’s discuss in detail.
								</div>
								<div
									className={styles.buttonsbigsecondary}
									onClick={onButtonsBigSecondaryContainerClick}
								>
									<div className={styles.buttonsbigprimarylabelChild} />
									<b className={styles.cancel}>Contact us</b>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.allTheGuidanceYoullNeed}>
					<div className={styles.bg12} data-scroll-to="bg1" />
					<img className={styles.imgIcon4} alt="" src="../img4@2x.png" />
					<div
						className={styles.buttonsbigprimarylabel1}
						onClick={onButtonsBigPrimaryLabelContainer1Click}
					>
						<div className={styles.buttonsbigprimarylabelIconChild} />
						<b className={styles.submit3}>Contact us</b>
					</div>
					<div className={styles.checkmarks2}>
						<div className={styles.thousandOfSuccessfulPayoutsParent}>
							<div className={styles.thousandOfSuccessfulPayouts}>
								Extensive integration support
							</div>
							<div className={styles.icons88success}>
								<img
									className={styles.juiceIconsPaymentTriggered}
									alt=""
									src="../juiceiconspaymenttriggered88x88-1@2x.png"
								/>
							</div>
						</div>
						<div className={styles.complianceRiskExpertsParent}>
							<div
								className={styles.thousandOfSuccessfulPayouts}
							>{`Compliance & risk experts`}</div>
							<div className={styles.icons88success}>
								<img
									className={styles.juiceIconsPaymentTriggered}
									alt=""
									src="../juiceiconspaymenttriggered88x88-1@2x.png"
								/>
							</div>
						</div>
						<div className={styles.roundTheClockSupportParent}>
							<div className={styles.thousandOfSuccessfulPayouts}>
								Dedicated product usecase workshop
							</div>
							<div className={styles.icons88success}>
								<img
									className={styles.juiceIconsPaymentTriggered}
									alt=""
									src="../juiceiconspaymenttriggered88x88-1@2x.png"
								/>
							</div>
						</div>
					</div>
					<b className={styles.higherLevelsOfOperationalE1}>
						All the guidance you’ll need
					</b>
					<div className={styles.ourTeamOfExpertsProvideGu}>
						Our team of experts provide guidance from inquiry to integration and
						beyond. Get personalized recommendations for your business use case.
					</div>
				</div>
			</div>
		</Stack>
	);
};

export default Main;
