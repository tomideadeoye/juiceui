/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ContactButton from "../../../components/juiceButton";
import { Checkrizer } from "./chargesSection";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100%",
		height: "100%",
		background: theme.palette.grey[800],
		color: "white",
		"& > *": {
			lineHeight: "32px",
		},
	},
	mainData: {
		padding: theme.spacing(4, 3, 2, 5),
		lineHeight: "32px",

		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(4, 3, 2, 3),
		},

		"& > *:first-child": {
			// fontSize: theme.typography.h4.fontSize,
			fontWeight: "bold",
		},
		"&:hover": {
			background: "#322e5d",
		},
	},

	image: {
		[theme.breakpoints.down("lg")]: {
			display: "none",
		},
	},
}));

export default function ImageDataSplit({ data }) {
	const styles = useStyles();

	const { title, description, iterable, imgLocation, button } = data;

	return (
		<Stack direction={{ sm: "column", md: "row" }} className={styles.container}>
			<Stack className={styles.mainData} spacing={4}>
				<Typography variant="h4" fontWeight="bold">
					{title}
				</Typography>

				<Typography variant="body1" fontWeight="300" lineHeight="32px">
					{description}
				</Typography>

				{iterable.map((item) => {
					return <Checkrizer key={item} content={item} />;
				})}

				<ContactButton
					color="white"
					link={button.link}
					label={button.item}
					extenal={button.extenal}
				/>
			</Stack>
			<Box
				className={styles.image}
				component="img"
				src={imgLocation}
				sx={{
					backgroundRepeat: "no-repeat",
					width: "100%",
					height: "75vh",
					backgroundSize: "cover",
					filter: "grayscale(100%)",
					"&:hover": {
						filter: "grayscale(0%)",
						transition: "all 1s ease",
					},
				}}
			/>
		</Stack>
	);
}
