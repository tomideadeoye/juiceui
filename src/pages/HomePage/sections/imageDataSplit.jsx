/* eslint-disable react/prop-types */
import { Box, Button, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Checkrizer } from "./chargesSection";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100%",
		background: "black",
		color: "white",
		"& > *": {
			lineHeight: "32px",
		},
	},
	mainData: {
		padding: theme.spacing(2, 2),
	},
}));

export default function ImageDataSplit({ data }) {
	const styles = useStyles();

	return (
		<Stack direction="row" className={styles.container}>
			<Stack className="mainData">
				<Box>{data.title}</Box>
				<Stack>
					<Box>{data.description}</Box>
					{data.iterable.map((item) => {
						return <Checkrizer key={item} content={item} />;
					})}
				</Stack>
				<Button />
			</Stack>
			<Box
				component="img"
				src={data.imgLocation}
				sx={{
					backgroundRepeat: "no-repeat",
					width: "50%",
					height: "50vh",
				}}
			/>
		</Stack>
	);
}
