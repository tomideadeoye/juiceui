import { Box, Stack, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { appData } from "../appTextData";
import MUIDrawer from "./drawer";
import ContactButton from "./juiceButton";

const useStyles = makeStyles((theme) => ({
	header: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		background:
			"linear-gradient(180deg,rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.25))",

		backdropFilter: "blur(40px)",
		alignItems: "center",
		padding: theme.spacing(1, 1),
		position: "sticky",
		top: 0,
		left: 0,
		zIndex: 100,
		fontFamily: theme.typography.fontFamily,

		[theme.breakpoints.down("sm")]: {
			justifyContent: "space-between",
		},
	},
	juiceLogo: {
		width: 72,
		height: 24,
		cursor: "pointer",
	},
	sections: {
		"& > *": {
			lineHeight: "24px",
			cursor: "pointer",
			fontSize: 16,
			margin: theme.spacing(0, 1),
			[theme.breakpoints.down("md")]: {
				margin: "10px",
			},
		},
	},

	navItem: {
		[theme.breakpoints.down("md")]: {
			fontSize: 12,
		},
	},
}));

export default function Header() {
	const styles = useStyles();
	const navigate = useNavigate();
	const path = window.location.pathname;

	const onGuidanceTextClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='guidance']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	const onUseCasesTextClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='usecases']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	const onBenefitsText1Click = useCallback(() => {
		if (path !== "/") {
			// navigate to home page
			navigate("/");
		}

		const anchor = document.querySelector("[data-scroll-to='benefitsText']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	return (
		<Box className={styles.header}>
			<Box
				className={styles.juiceLogo}
				component="img"
				alt=""
				src="../group-134.svg"
				onClick={useCallback(() => {
					navigate("/");
				}, [navigate])}
			/>

			{useMediaQuery((theme) => theme.breakpoints.up("sm")) && (
				<>
					<Stack
						className={styles.sections}
						direction="row"
						justifyContent="space-between"
					>
						<Box
							component="a"
							href={appData.documentation}
							target="_blank"
							rel="noreferrer"
							sx={{
								textDecoration: "none",
								color: "black",
							}}
							className={styles.navItem}
						>
							Documentation
						</Box>
						<Box
							component="a"
							onClick={onBenefitsText1Click}
							className={styles.navItem}
						>
							Benefits
						</Box>
						<Box
							component="a"
							onClick={onUseCasesTextClick}
							className={styles.navItem}
						>
							Use cases
						</Box>
						<Box
							component="a"
							onClick={onGuidanceTextClick}
							className={styles.navItem}
						>
							Guidance
						</Box>
					</Stack>
					<ContactButton link="/contact-us" label="Contact us" />
				</>
			)}
			{useMediaQuery((theme) => theme.breakpoints.down("sm")) && (
				<Box>
					<MUIDrawer />
				</Box>
			)}
		</Box>
	);
}
