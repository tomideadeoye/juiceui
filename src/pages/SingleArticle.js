import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { PageTransition } from "../components/animations";
import { lorem } from "../appTextData";
import Slider from "../components/slider";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(4, 5),
		fontFamily: theme.typography.fontFamily,
		textAlign: "justify",
		alignItems: "center",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			padding: theme.spacing(4, 2),
		},
	},
	heading: {
		fontSize: theme.typography.h5.fontSize,
		margin: theme.spacing(2, 0),
	},

	section2: {
		background: theme.palette.blue[300],
		padding: theme.spacing(4, 5),
		[theme.breakpoints.down("md")]: {
			padding: theme.spacing(4, 2),
		},
	},
	section3: {
		background: theme.palette.background.default,
		padding: theme.spacing(4, 5),
		[theme.breakpoints.down("md")]: {
			padding: theme.spacing(4, 2),
		},
	},
	sliderImg: {
		width: "100%",
		height: "100%",
		objectFit: "contain",
		borderRadius: theme.spacing(1),
	},
}));

const SingleArticle = () => {
	const styles = useStyles();

	return (
		<PageTransition>
			<Stack className={styles.container}>
				<Stack
					direction={{ sm: "column", md: "row" }}
					justifyContent="space-between"
					spacing={6}
					width="100%"
				>
					<Stack>
						<Typography
							variant="h3"
							fontWeight={700}
							gutterBottom
							maxWidth={500}
						>
							Article title goes here even if it’s long
						</Typography>
						<Typography
							variant="body1"
							fontWeight={300}
							maxWidth={500}
							lineHeight={2}
						>
							For one year, Juice has been innovating with payment technology.
							With every iteration, we move closer to our ultimate goal - to get
							global payments to the safest, quickest and most inexpensive it
							can be.
						</Typography>
					</Stack>
					<img
						className={styles.imgIcon}
						alt=""
						src="../img5@2x.png"
						height={300}
					/>
				</Stack>
				<Typography
					mb={4}
					variant="h4"
					fontWeight="normal"
					mt={4}
					alignSelf="flex-start"
				>
					Section title goes here
				</Typography>
				<Typography mb={4} variant="body1" fontWeight={300}>
					{lorem}
				</Typography>
				<Typography mb={4} variant="body1" fontWeight={300}>
					{lorem}
				</Typography>
			</Stack>
			<Stack width="100%" className={styles.section2}>
				<Stack>
					<Typography variant="h3" fontWeight={700} gutterBottom maxWidth={600}>
						Section title goes here and it’s an example of a section which is
						emphasized
					</Typography>
					<Typography
						variant="body1"
						fontWeight={300}
						maxWidth={500}
						lineHeight={2}
					>
						Here goes some subtitle but it might unecessary to use it as below
						goes the section content.
					</Typography>
					<Typography
						variant="h5"
						mt={4}
						fontWeight={700}
						gutterBottom
						maxWidth={500}
					>
						Section subtitle goes here
					</Typography>
					<Box pl={1}>
						<ul>
							<li>
								<Typography
									variant="body1"
									mt={1}
									fontWeight={300}
									gutterBottom
									maxWidth={500}
								>
									Bullet 1
								</Typography>
							</li>
							<li>
								<Typography
									variant="body1"
									mt={1}
									fontWeight={300}
									gutterBottom
									maxWidth={500}
								>
									Bullet 2
								</Typography>
							</li>
							<li>
								<Typography
									variant="body1"
									mt={1}
									fontWeight={300}
									gutterBottom
									maxWidth={500}
								>
									Bullet 3
								</Typography>
							</li>
							<li>
								<Typography
									variant="body1"
									mt={1}
									fontWeight={300}
									gutterBottom
									maxWidth={500}
								>
									Bullet 4
								</Typography>
							</li>
						</ul>
					</Box>
					<Typography
						variant="h5"
						mt={5}
						fontWeight={700}
						gutterBottom
						maxWidth={500}
					>
						Section subtitle goes here
					</Typography>
					<Typography variant="body1" fontWeight={300} lineHeight={2} mt={2}>
						{lorem}
					</Typography>
					<Typography
						variant="h5"
						mt={5}
						fontWeight={700}
						gutterBottom
						maxWidth={500}
					>
						Section subtitle and slider go here
					</Typography>
					<Slider />
					<Typography variant="body1" fontWeight={300} lineHeight={2} mt={2}>
						{lorem}
					</Typography>
				</Stack>
			</Stack>
			<Stack width="100%" className={styles.section3}>
				<Stack>
					<Typography variant="h3" fontWeight={700} gutterBottom maxWidth={600}>
						Section title goes here and the image
					</Typography>
					<Typography
						variant="body1"
						fontWeight={300}
						maxWidth={500}
						lineHeight={2}
					>
						Here goes some subtitle but it might unecessary to use it as below
						goes the section content.
					</Typography>

					<Box
						mt={3}
						component="img"
						className={styles.sliderImg}
						src="https://source.unsplash.com/1920x1080/?nature,water"
						alt="nature"
					/>

					<Typography variant="body1" fontWeight={300} lineHeight={2} mt={2}>
						{lorem}
					</Typography>
					<Typography
						variant="h4"
						mt={5}
						fontWeight={700}
						gutterBottom
						maxWidth={500}
					>
						Section subtitle and slider go here
					</Typography>
					<Slider />
					<Typography variant="body1" fontWeight={300} lineHeight={2} mt={5}>
						{lorem}
					</Typography>
				</Stack>
			</Stack>
		</PageTransition>
	);
};

export default SingleArticle;
