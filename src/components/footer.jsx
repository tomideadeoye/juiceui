import { Box, Grid, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { footerItems } from "../routes";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "var(--color-pink)",
		padding: theme.spacing(3, 3),
	},

	juiceAfricaAllRightsReserParent: {
		fontSize: "var(--font-size-xs)",
	},
	juiceAfricaAllRightsReser: {},

	usingJuiceRails: {
		marginBlockStart: 0,
		marginBlockEnd: 0,
	},
	seeYourTransfers: {
		margin: 0,
	},
	juiceLogo: {
		cursor: "pointer",
		borderRadius: "var(--br-sm)",
		backgroundColor: "var(--grey-700)",
		padding: "10px 20px",
	},

	resourcesParent: {
		display: "flex",
		alignSelf: "flex-start",

		// select first child
		"& > *:first-child": {
			"& > *": {
				margin: "10px",
			},
		},
	},

	routes: {
		cursor: "pointer",
		"&:hover": {
			textDecoration: "underline",
		},
	},
}));

export default function Footer() {
	const styles = useStyles();
	const navigate = useNavigate();

	return (
		<Grid container className={styles.container}>
			<Grid item xs={12} sm={6} md={3}>
				<Stack
					direction="row"
					className={styles.juiceAfricaAllRightsReserParent}
				>
					<Box
						className={styles.juiceLogo}
						component="img"
						src="../logosjuiceshort.svg"
						onClick={useCallback(() => {
							navigate("/");
						}, [navigate])}
					/>
					<Stack className={styles.juiceAfricaAllRightsReser}>
						<p className={styles.usingJuiceRails}>©2022 Juice Africa.</p>
						<p className={styles.seeYourTransfers}>All rights reserved.</p>
					</Stack>
				</Stack>
			</Grid>

			{footerItems.map((item, index) => (
				<Grid
					key={index}
					item
					xs={12}
					sm={6}
					md={3}
					className={styles.resourcesParent}
				>
					<Stack>
						<b className={styles.resources}>{item.title}</b>
						{item.items.map((item, index) => (
							<Box
								className={styles.routes}
								onClick={() => navigate(item.link)}
								key={index}
							>
								{item.title}
							</Box>
						))}
					</Stack>
				</Grid>
			))}
		</Grid>
	);
}
