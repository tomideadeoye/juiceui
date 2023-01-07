import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import AnimatedText from "react-animated-text-content";
import ContactButton from "../../../components/juiceButton";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "70vh",
		width: "100%",
		textAlign: "center",
		backgroundImage: "url('../img@2x.png')",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
		marginBottom: theme.spacing(1),
		padding: theme.spacing(0, 4),
		[theme.breakpoints.down("md")]: {
			padding: theme.spacing(0, 2),
			height: "60vh",
		},
	},

	everythingYouNeedForReliab: {
		fontSize: theme.typography.h1.fontSize,
		width: "70%",
		[theme.breakpoints.down("md")]: {
			fontSize: theme.typography.h4.fontSize,
		},
	},
	juiceIsAnEcosystemOfServi: {
		letterSpacing: "0.37px",
		width: "70%",
	},
	credentials: {
		height: "90px",
		fontSize: "var(--font-size-2xs)",
		color: "var(--grey-600)",
	},
	juiceUsers: {
		height: 48,
		width: "70%",
		[theme.breakpoints.down("md")]: {
			width: "100%",
		},
	},
	diverseIndustryLeadersTrust: {
		letterSpacing: 0.37,
		textTransform: "uppercase",
	},
}));

export default function HeroSection() {
	const mediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

	const styles = useStyles();

	return (
		<Stack className={styles.container} spacing={4}>
			<b className={styles.everythingYouNeedForReliab}></b>

			<Typography
				pt={mediumScreen ? 4 : 0}
				variant={mediumScreen ? "h5" : "h2"}
				fontWeight="550"
				maxWidth={{ xs: "100%", md: "70%" }}
			>
				<AnimatedText
					type="words"
					animation={{
						x: "200px",
						y: "-20px",
						scale: 1.1,
						ease: "ease-in-out",
					}}
					animationType="float"
					interval={0.06}
					duration={0.8}
					includeWhiteSpaces
					threshold={0.1}
					rootMargin="20%"
				>
					Everything you need for reliable global payments
				</AnimatedText>
			</Typography>

			<Typography
				variant={mediumScreen ? "body2" : "body1"}
				fontWeight="300"
				maxWidth={{ xs: "100%", md: "60%" }}
			>
				Juice is an ecosystem of services making business cross border payment
				less complex, more reliable and compliant than ever before.
			</Typography>

			<ContactButton label="Contact Us" link="/contact-us" color="primary" />

			<div className={styles.credentials}>
				<img className={styles.juiceUsers} alt="" src="../group-82.svg" />
				<Box className={styles.diverseIndustryLeadersTrust} mt={2}></Box>
				<Typography variant={mediumScreen ? "body2" : "body1"} fontWeight="300">
					DIVERSE INDUSTRY LEADERS TRUST JUICE
				</Typography>
			</div>
		</Stack>
	);
}
