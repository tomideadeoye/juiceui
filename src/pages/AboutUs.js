import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Benefits from "../components/benefits";
import ImageDataSplit from "./HomePage/sections/imageDataSplit";
import Idcard from "../components/idcard";
import { PageTransition } from "../components/animations";
import { teamMembers } from "../appTextData";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.background.default,
	},
	wrapper: {
		padding: theme.spacing(2, 5),
		[theme.breakpoints.down("md")]: {
			padding: theme.spacing(2, 3),
		},
	},
	speedySettlementsSection: {
		borderRadius: theme.borderRadius.md,
		backgroundColor: theme.palette.white.main,
		backdropFilter: "blur(40px)",
		padding: theme.spacing(2, 2),
		height: "100%",
		"& > *": {
			lineHeight: "42px",
		},
	},
}));

const values = [
	{
		icon: "../juiceiconstransactioninprogress88x88@2x.png",
		title: "KYC & fraud checks",
		description:
			"Get your business and your users onboarded safely and compliantly, without all the frustrations. Maximize payments from legitimate customers and minimize fraud.",
	},
	{
		icon: "../juiceiconstransactioninprogress88x88@2x.png",
		title: "Payment gateway",
		description:
			"Avoid the collections difficulties in emerging markets. Enable fully compliant payment collections for your business. Accept payments from your users in both digital and.",
	},
];

const splitDataContent = [
	{
		title: "Do you think you’re a good fit?",
		description:
			"Even though we may not be looking for talents and the moment we are open to any inquiries. Reach out to us and convince why we should work toghether.",
		iterable: [
			"Make sure your resume is attached",
			"We value skills the most",
			"We’ll reply to every email regardless of the decision",
		],
		imgLocation: "../img4@2x.png",
		button: {
			link: "/contact-us",
			item: "Contact us",
			image: "../icons24externallink.svg",
		},
	},
];

const AboutUs = () => {
	const styles = useStyles();

	return (
		<PageTransition>
			<Stack className={styles.container} spacing={4} pt={6}>
				<Stack className={styles.wrapper} spacing={4}>
					{/* ABOUT US */}
					<Stack
						direction={{ sm: "column", md: "row" }}
						justifyContent="space-between"
						spacing={3}
					>
						<Stack>
							<Typography variant="h3" fontWeight={700} gutterBottom>
								About us
							</Typography>
							<Typography
								variant="body1"
								fontWeight={300}
								maxWidth={500}
								lineHeight={2}
							>
								For one year, Juice has been innovating with payment technology.
								With every iteration, we move closer to our ultimate goal - to
								get global payments to the safest, quickest and most inexpensive
								it can be.
							</Typography>
						</Stack>
						<img
							className={styles.imgIcon}
							alt=""
							src="../img5@2x.png"
							height={300}
						/>
					</Stack>
					{/* JUICE VALUES */}
					<Typography variant="h3" fontWeight={400} gutterBottom>
						Juice values
					</Typography>
					<Typography variant="body1" fontWeight={300} gutterBottom>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</Typography>
					<Box>
						<Grid
							container
							spacing={2}
							className={styles.speedySettlementsSection}
						>
							<Grid item sm={12} md={6}>
								<Stack spacing={2}>
									<Typography variant="h5" fontWeight="bold">
										Speedy settlements
									</Typography>
									<Typography
										variant="body1"
										fontWeight="300"
										lineHeight="32px"
										maxWidth="400px"
									>
										Legacy payments take up to 4 business days to settle. With
										Juice’s rapid payment system, payments settle in only a
										couple of hours. Save time and effort with effective scheme
										management, and timely settlement.
									</Typography>
								</Stack>
							</Grid>
							<Grid item sm={12} md={6}>
								<Box
									sx={{
										backgroundImage: `url(../img2@2x.png)`,
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover",
										height: "100%",
										width: "100%",
									}}
								/>
							</Grid>
						</Grid>
					</Box>
					<Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
						<Benefits data={values[0]} />
						<Benefits data={values[1]} />
					</Stack>
					{/* TEAMS */}
					<Typography variant="h3" fontWeight={400} gutterBottom>
						Our team
					</Typography>
					<Typography variant="body1" fontWeight={300} gutterBottom>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</Typography>
					<Typography variant="h5" fontWeight={700} gutterBottom>
						Management
					</Typography>
					<Grid container>
						{teamMembers.management.map((member) => (
							<Grid key={member.name} item sm={12} md={6} lg={4}>
								<Idcard data={member} />
							</Grid>
						))}
					</Grid>

					<Typography variant="h5" fontWeight={700} gutterBottom>
						Engineering
					</Typography>
					<Box>
						<Grid container>
							{teamMembers.engineering.map((member) => (
								<Grid key={member.name} item sm={12} md={6} lg={4}>
									<Idcard data={member} />
								</Grid>
							))}
						</Grid>
					</Box>
					<Typography variant="h5" fontWeight={700} gutterBottom>
						Product
					</Typography>
					<Grid container>
						{teamMembers.product.map((member) => (
							<Grid key={member.name} item sm={12} md={6} lg={4}>
								<Idcard data={member} />
							</Grid>
						))}
					</Grid>
					<Typography variant="h5" fontWeight={700} gutterBottom>
						Treasury Ops
					</Typography>
					<Grid container>
						{teamMembers.treasury.map((member) => (
							<Grid key={member.name} item xs={12} sm={6} md={6} lg={4}>
								<Idcard data={member} />
							</Grid>
						))}
					</Grid>
				</Stack>

				<ImageDataSplit data={splitDataContent[0]} />
			</Stack>
		</PageTransition>
	);
};

export default AboutUs;
