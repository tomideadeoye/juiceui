import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
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
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(0, 2),
			height: "100vh",
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
				variant={mediumScreen ? "h4" : "h2"}
				fontWeight="550"
				maxWidth={{ xs: "100%", md: "70%" }}
			>
				Everything you need for reliable global payments
			</Typography>

			<Typography
				variant="body1"
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
