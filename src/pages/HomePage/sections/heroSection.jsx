import { Box, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ContactButton from "../../../components/contactButton";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100%",
		height: "80vh",
		textAlign: "center",
		backgroundImage: "url('../img@2x.png')",
		backgroundSize: "contain",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		margin: theme.spacing(4, 0, 0, 0),
		padding: theme.spacing(1, 4),
	},
	wrapper: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		"& > *": {
			margin: theme.spacing(1, 0),
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
	},
	diverseIndustryLeadersTrust: {
		letterSpacing: 0.37,
		textTransform: "uppercase",
	},
}));

export default function HeroSection() {
	const styles = useStyles();

	return (
		<Box className={styles.container}>
			<Stack className={styles.wrapper}>
				<b className={styles.everythingYouNeedForReliab}>
					Everything you need for reliable global payments
				</b>

				<Box className={styles.juiceIsAnEcosystemOfServi}>
					Juice is an ecosystem of services making business cross border payment
					less complex, more reliable and compliant than ever before.
				</Box>
				<ContactButton color="primary" link="/contact-us" />
				<div className={styles.credentials}>
					<img className={styles.juiceUsers} alt="" src="../group-82.svg" />
					<Box className={styles.diverseIndustryLeadersTrust} mt={2}>
						DIVERSE INDUSTRY LEADERS TRUST JUICE
					</Box>
				</div>
			</Stack>
		</Box>
	);
}
