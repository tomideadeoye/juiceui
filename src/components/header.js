import { Box, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContactButton from "./contactButton";

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
		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
		},
		position: "fixed",
		top: 0,
		left: 0,
		zIndex: 100,
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
		},
	},
}));

export default function Header() {
	const styles = useStyles();
	const navigate = useNavigate();

	const onGuidanceTextClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='bg1']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	const onUseCasesTextClick = useCallback(() => {
		const anchor = document.querySelector(
			"[data-scroll-to='paymentSolutionsFor']"
		);
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	const onBenefitsText1Click = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='benefitsText']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	const onDocumentationTextClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='bg']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	return (
		<Box className={styles.header}>
			<img
				className={styles.juiceLogo}
				alt=""
				src="../group-134.svg"
				onClick={useCallback(() => {
					navigate("/");
				}, [navigate])}
			/>

			<Stack
				className={styles.sections}
				direction="row"
				justifyContent="space-between"
			>
				<div onClick={onDocumentationTextClick}>Documentation</div>
				<div onClick={onBenefitsText1Click}>Benefits</div>
				<div onClick={onUseCasesTextClick}>Use cases</div>
				<div onClick={onGuidanceTextClick}>Guidance</div>
			</Stack>
			<ContactButton />
		</Box>
	);
}
