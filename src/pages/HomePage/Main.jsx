import React from "react";
import HeroSection from "./sections/heroSection";
import Benefits from "../../components/benefits";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ChargesSection from "./sections/chargesSection";
import ImageDataSplit from "./sections/imageDataSplit";
import BenefitsSection from "./sections/benefits";
import BragSection2 from "./sections/bragSection2";
import JuiceAccordion from "../../components/muiAccordion";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100%",
		background: theme.palette.background.default,
	},

	content: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
		gap: "var(--gap-0)",
		width: "100%",
	},

	acceptProcessPaymentsSection: {
		padding: theme.spacing(2, 5),
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(1, 1),
		},
	},

	speedySettlementsSection: {
		borderRadius: theme.borderRadius.md,
		backgroundColor: theme.palette.white.main,
		backdropFilter: "blur(40px)",
		padding: theme.spacing(2, 2),
		height: "100%",
		"& > *": {
			lineHeight: "42px",
		},
	},

	youAreInControl: {
		width: "100%",
		backgroundColor: theme.palette.primary.dark,
		padding: theme.spacing(2, 2, 0, 2),
		borderRadius: theme.borderRadius.md,
		color: theme.palette.white.main,
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
		<Stack className={styles.container}>
			<HeroSection />
			<Stack className={styles.acceptProcessPaymentsSection} spacing={3}>
				<Typography variant="h4" fontWeight="bold" maxWidth="450px">
					Accept and process payments in a secure and scalable way
				</Typography>

				<Grid container spacing={2} className={styles.speedySettlementsSection}>
					<Grid item sm={12} md={6}>
						<Stack spacing={2}>
							<Typography variant="h5" fontWeight="bold">
								Speedy settlements
							</Typography>
							<Typography
								variant="body1"
								fontWeight="300"
								lineHeight="32px"
								maxWidth="400px"
							>
								Legacy payments take up to 4 business days to settle. With
								Juice’s rapid payment system, payments settle in only a couple
								of hours. Save time and effort with effective scheme management,
								and timely settlement.
							</Typography>
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
				<Stack className={styles.youAreInControl} spacing={3}>
					<Typography variant="h5" fontWeight="bold">
						You’re in control
					</Typography>

					<Grid container justifyContent="space-between" alignItems="center">
						<Grid item sm={12} lg={6}>
							<Typography variant="body1" fontWeight="300" lineHeight="32px">
								One robust dashboard to manage all your finance operations
								within our ecosystem
							</Typography>
						</Grid>
						<Grid item sm={12} lg={6}>
							<Typography
								variant="body1"
								fontWeight="300"
								lineHeight="32px"
								textAlign="justify"
							>
								With both top-level and indepth transaction history view on the
								dashboard, Juice helps finance teams reconcile transactions
								efficiently and conveniently.
							</Typography>
						</Grid>
					</Grid>
					<Box
						src="../img1@2x.png"
						alt="Juice Dashboard"
						className={styles.imgIcon1}
						component="img"
						width="100%"
					/>
				</Stack>

				<Stack
					direction={{ xs: "column", sm: "row" }}
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
					width="100%"
				>
					<Benefits data={benefitsArray[0]} />
					<Benefits data={benefitsArray[1]} />
				</Stack>

				<ChargesSection />
			</Stack>
			<ImageDataSplit data={splitDataContent[0]} />
			<Stack className={styles.acceptProcessPaymentsSection}>
				<BenefitsSection />
				<BragSection2 />
				<JuiceAccordion />
			</Stack>
			<ImageDataSplit data={splitDataContent[1]} />{" "}
		</Stack>
	);
};

export default Main;
