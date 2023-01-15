import { Box, Chip, Grid, Stack, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { AnimationMakerCards } from "../components/animations";

const useStyles = makeStyles((theme) => ({
	container: {
		background: theme.palette.background.default,
		padding: theme.spacing(2, 5),
		[theme.breakpoints.down("md")]: {
			padding: theme.spacing(2, 3),
		},
	},

	cardBox: {
		borderRadius: theme.borderRadius.md,
		backgroundColor: theme.palette.white.main,
		// padding: theme.spacing(2, 2),

		"& > img": {
			borderRadius: theme.borderRadius.md,
		},

		"&:hover": {
			boxShadow: theme.shadows[2],
			padding: theme.spacing(0, 0),
		},
	},
}));

const articles = [
	{
		id: 1,
		title: "A Short Survey of the business models of DeFi platforms",
	},
	{
		id: 2,
		title: "Taming the Wild West of DeFi: A Guide to DeFi Risk Management",
	},
	{ id: 3, title: "Binance Smart Chain: A New Frontier for DeFi" },
];

const verticals = [
	"Payments",
	"Fintech",
	"Africa",
	"Blockchain",
	"Cryptocurrency",
	"DeFi",
];

const Articles = () => {
	const styles = useStyles();
	const navigate = useNavigate();

	return (
		<Stack className={styles.container} spacing={8} alignItems="center" mb={10}>
			<Typography variant="h3" fontWeight={700} textAlign="center" mt={5}>
				Articles
			</Typography>

			<Typography
				variant="h6"
				fontWeight={300}
				textAlign="center"
				maxWidth={800}
			>
				Making a general inquiry, or you’ll like us to talk in detail? Tell us
				what you need and we will get back to you as soon as possible.
			</Typography>

			<Grid container spacing={2} justifyContent="center" alignItems="center">
				{verticals.map((item) => {
					return (
						<Grid key={item} item xs={6} sm={4} md={2}>
							<Stack alignItems="center">
								<Chip
									label={item}
									color="primary"
									sx={{
										backgroundColor: "#7c74e9",
									}}
								/>
							</Stack>
						</Grid>
					);
				})}
			</Grid>

			<TextField
				id="standard-basic"
				label="Search a post"
				variant="standard"
				fullWidth
				sx={{ m: 1 }}
			/>

			<Stack spacing={6} m={4}>
				{articles.map((item) => {
					return (
						// <AnimationMakerCards >
						<Box onClick={() => navigate(`/article-details`)} key={item.id}>
							{" "}
							<Stack
								direction={{ sm: "column", md: "row" }}
								justifyContent="space-between"
								spacing={3}
								alignItems="center"
								className={styles.cardBox}
							>
								<Stack
									spacing={3}
									padding={3}
									// sx={{
									// 	padding: { sm: "1rem", md: "2rem" },
									// }}
								>
									<Typography
										variant="body1"
										fontWeight={600}
										gutterBottom
										maxWidth={300}
									>
										{item.title}
									</Typography>
									<Stack direction="row" spacing={3}>
										<Chip
											label="Payments"
											color="primary"
											sx={{
												backgroundColor: "#7c74e9",
											}}
										/>
									</Stack>
								</Stack>
								<img
									className={styles.imgIcon}
									alt=""
									src="../img20@2x.png"
									height={300}
								/>
							</Stack>
						</Box>
					);
				})}
			</Stack>
		</Stack>
	);
};

export default Articles;
