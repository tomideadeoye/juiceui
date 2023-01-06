import { Box, Grid, Stack, Typography } from "@mui/material";
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
		padding: theme.spacing(4, 3),
		background: theme.palette.primary.main,
		fontFamily: theme.typography.fontFamily,
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			padding: theme.spacing(2, 1),
			justifyContent: "center",
			gap: theme.spacing(2),
		},
		"& > a": {
			textDecoration: "none",
		},
	},

	juiceAfricaAllRightsReserParent: {
		fontSize: theme.typography.pxToRem(14),
	},
	juiceAfricaAllRightsReser: {
		"& > *": {
			margin: theme.spacing(0, 1),
		},
	},

	juiceLogo: {
		cursor: "pointer",
		borderRadius: theme.borderRadius.md,
		backgroundColor: theme.palette.grey[800],
		padding: theme.spacing(1),
		margin: theme.spacing(0, 2, 0, 0),
		"&:hover": {
			backgroundColor: theme.palette.grey[700],
		},
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
						<Typography
							variant="body1"
							fontWeight="300"
							lineHeight="32px"
							textAlign="justify"
						>
							2022 Juice Africa.
						</Typography>
						<Typography
							variant="body1"
							fontWeight="300"
							lineHeight="32px"
							textAlign="justify"
						>
							All rights reserved.
						</Typography>
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
					<Stack
						sx={{
							"& > a": {
								textDecoration: "none",
								color: "inherit",
							},
						}}
					>
						<b className={styles.resources}>{item.title}</b>
						{item.items.map((item, index) => (
							<Typography
								className={styles.routes}
								component="a"
								href={item.link}
								key={index}
								variant="body1"
								fontWeight="300"
								lineHeight="32px"
								textAlign="justify"
							>
								{item.title}
							</Typography>
						))}
					</Stack>
				</Grid>
			))}
		</Grid>
	);
}
