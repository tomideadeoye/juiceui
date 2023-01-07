import React from "react";
import HeroSection from "./sections/heroSection";
import Benefits from "../../components/benefits";
import { makeStyles } from "@mui/styles";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import ChargesSection from "./sections/chargesSection";
import ImageDataSplit from "./sections/imageDataSplit";
import BenefitsSection from "./sections/benefits";
import BragSection2 from "./sections/bragSection2";
import JuiceAccordion from "../../components/muiAccordion";
import {
	AnimationMakerText,
	PageTransition,
} from "../../components/animations";
import { splitDataContent } from "../../appTextData";

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
		"&:hover": {
			background: `linear-gradient(to right,  ${theme.palette.primary.dark} 0%, ${theme.palette.grey[700]} 100%)`,
		},
	},
	controlTextBox: {
		padding: theme.spacing(2, 4, 0, 3),
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(2, 0, 0, 0),
		},
	},
}));

const Main = () => {
	const styles = useStyles();
	const mediumDown = useMediaQuery("(min-width:600px)");

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
		<PageTransition>
			<Stack className={styles.container}>
				<HeroSection />
				<Stack className={styles.acceptProcessPaymentsSection} spacing={3}>
					<Typography
						variant={mediumDown ? "h4" : "body1"}
						fontWeight="bold"
						maxWidth={mediumDown ? "450px" : "70%"}
					>
						Accept and process payments in a secure and scalable way
					</Typography>

					<Stack
						className={styles.speedySettlementsSection}
						direction={{ sm: "column", md: "row" }}
					>
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

						<Box
							sx={{
								backgroundImage: `url(../img2@2x.png)`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								// height: "100px",
								width: "70%",
							}}
						/>
					</Stack>
					{/* YOUR ARE IN CONTROL SECTION */}
					<Stack className={styles.youAreInControl} spacing={3}>
						<Stack spacing={3} className={styles.controlTextBox}>
							<Typography variant="h5" fontWeight="bold" mt={2}>
								<AnimationMakerText>You’re in control</AnimationMakerText>
							</Typography>
							<Stack
								direction={{ xs: "column", sm: "row" }}
								justifyContent="space-between"
							>
								<Typography
									variant="body1"
									fontWeight="300"
									lineHeight="32px"
									maxWidth={{ xs: "100%", sm: "400px" }}
								>
									One robust dashboard to manage all your finance operations
									within our ecosystem
								</Typography>
								<Typography
									variant="body1"
									fontWeight="300"
									lineHeight="32px"
									maxWidth={{ xs: "100%", sm: "400px" }}
								>
									With both top-level and indepth transaction history view on
									the dashboard, Juice helps finance teams reconcile
									transactions efficiently and conveniently.
								</Typography>
							</Stack>
						</Stack>
						<Box
							src="../img1@2x.png"
							alt="Juice Dashboard"
							className={styles.imgIcon1}
							component="img"
							width="100%"
						/>{" "}
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
				<Box data-scroll-to="documentation">
					<ImageDataSplit data={splitDataContent[0]} />
				</Box>
				<Stack className={styles.acceptProcessPaymentsSection}>
					<BenefitsSection />
				</Stack>
				<Stack className={styles.acceptProcessPaymentsSection}>
					<BragSection2 />
					<Box data-scroll-to="usecases">
						<JuiceAccordion />
					</Box>
				</Stack>
				<Box data-scroll-to="guidance">
					<ImageDataSplit data={splitDataContent[1]} />
				</Box>
			</Stack>
		</PageTransition>
	);
};

export default Main;
