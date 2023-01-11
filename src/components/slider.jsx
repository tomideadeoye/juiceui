import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
	sliderImg: {
		width: "100%",
		height: "100%",
		objectFit: "contain",
		borderRadius: theme.spacing(1),
		[theme.breakpoints.down("md")]: {
			width: "80%",
		},
	},

	arrows: {
		color: "black",
		background: "white",
		padding: "3px",
		borderRadius: "20%",
		[theme.breakpoints.down("md")]: {
			fontSize: "small",
		},
		"&:hover": {
			background: "black",
			color: "white",
		},
	},
}));

export default function Slider() {
	const styles = useStyles();

	const images = [
		"https://source.unsplash.com/?nature,water",
		"https://source.unsplash.com/random/?productivity,city",
		"https://source.unsplash.com/random",
	];

	const [image, setImage] = useState(images[0]);

	return (
		<Box className="slider" mt={2}>
			<Box className="slider__container">
				<Stack
					className="slider__image"
					direction="row"
					alignItems="center"
					spacing={1}
				>
					<ArrowBackIosIcon
						className={styles.arrows}
						sx={styles.arrows}
						onClick={() => {
							setImage(images[images.indexOf(image) - 1]);
						}}
					/>
					<Box
						component="img"
						className={styles.sliderImg}
						src={image}
						alt="nature"
					/>
					<ArrowForwardIosIcon
						className={styles.arrows}
						onClick={() => {
							setImage(images[images.indexOf(image) + 1]);
						}}
					/>
				</Stack>
				<Typography
					fontSize="12px"
					fontWeight={100}
					letterSpacing=".5px"
					textAlign="center"
					mt={2}
				>
					HERE COMES THE IMAGE DESCRIPTION. IT&apos;S OPTIONAL BUT IT MAY BE
					GOOD TO USE IT ANYWAY.
				</Typography>
			</Box>
		</Box>
	);
}
