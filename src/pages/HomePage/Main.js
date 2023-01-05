// import styles from "./Main.module.css";
import React from "react";
import HeroSection from "./sections/heroSection";
import Benefits from "../../components/benefits";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Stack } from "@mui/material";
import ChargesSection from "./sections/chargesSection";
import ImageDataSplit from "./sections/imageDataSplit";
import BenefitsSection from "./sections/benefits";

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
		// background: "pink",
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

	const splitDataContent = [
		{
			title: "Higher levels of operational efficiency with our API suite",
			description:
				"Juice is an ecosystem of services making business cross border payment less complex, more reliable and compliant than ever before.",
			iterable: [
				"Thousand of successful payouts",
				"Compliance & risk experts",
				"Round the clock support",
			],
			imgLocation: "../img3@2x.png",
			button: {
				link: "https://docs.spendjuice.org/docs",
				item: "Documentation",
				image: "../icons24externallink.svg",
			},
		},
		{
			title: "All the guidance you’ll need",
			description:
				"Our team of experts provide guidance from inquiry to integration and beyond. Get personalized recommendations for your business use case.",
			iterable: [
				"Extensive integration support",
				"Compliance & risk experts",
				"Dedicated product usecase workshop",
			],
			imgLocation: "../img4@2x.png",
			button: {
				link: "https://docs.spendjuice.org/docs",
				item: "Contact us",
			},
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
				<ChargesSection />

				<BenefitsSection />
			</Stack>
			<ImageDataSplit data={splitDataContent[0]} />
			<ImageDataSplit data={splitDataContent[1]} />
		</Stack>
	);
};

export default Main;
