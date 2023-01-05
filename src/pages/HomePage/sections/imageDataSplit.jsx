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
		background: "black",
		color: "white",
		"& > *": {
			lineHeight: "32px",
		},
	},
	mainData: {
		padding: theme.spacing(2, 2),
		lineHeight: "32px",

		"& > *:first-child": {
			fontSize: theme.typography.h4.fontSize,
			fontWeight: "bold",
		},
	},
}));

export default function ImageDataSplit({ data }) {
	const styles = useStyles();

	return (
		<Stack direction="row" className={styles.container}>
			<Stack className={styles.mainData} spacing={10}>
				<Typography variant="h5" fontWeight="bold">
					{data.title}
				</Typography>

				<Stack>
					<Box>{data.description}</Box>
					{data.iterable.map((item) => {
						return <Checkrizer key={item} content={item} />;
					})}
				</Stack>
				<ContactButton color="primary" link="/contact-us" />
			</Stack>
			<Box
				component="img"
				src={data.imgLocation}
				sx={{
					backgroundRepeat: "no-repeat",
					width: "60%",
					height: "100%",
				}}
			/>
		</Stack>
	);
}
