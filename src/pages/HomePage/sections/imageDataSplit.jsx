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

		"& > *:first-child": {
			// fontSize: theme.typography.h4.fontSize,
			fontWeight: "bold",
		},
	},
}));

export default function ImageDataSplit({ data }) {
	const styles = useStyles();

	const { title, description, iterable, imgLocation, button } = data;

	return (
		<Stack direction="row" className={styles.container}>
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

				<ContactButton color="white" link={button.link} label={button.item} />
			</Stack>
			<Box
				component="img"
				src={imgLocation}
				sx={{
					backgroundRepeat: "no-repeat",
					width: "100%",
					height: "75vh",
					backgroundSize: "cover",
				}}
			/>
		</Stack>
	);
}
