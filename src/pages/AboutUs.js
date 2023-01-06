import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Benefits from "../components/benefits";
import ImageDataSplit from "./HomePage/sections/imageDataSplit";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.background,
	},
	wrapper: { padding: theme.spacing(2, 5) },
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
		<Stack className={styles.container} spacing={4}>
			<Stack className={styles.wrapper}>
				{/* ABOUT US */}
				<Stack
					direction={{ xs: "column", sm: "row" }}
					justifyContent="space-between"
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
				{/* JUICE VALUES */}
				<Typography variant="h3" fontWeight={400} gutterBottom>
					Juice values
				</Typography>
				<Typography variant="body1" fontWeight={300} gutterBottom>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Typography>
				<Grid container spacing={2} className={styles.speedySettlementsSection}>
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
								Juice’s rapid payment system, payments settle in only a couple
								of hours. Save time and effort with effective scheme management,
								and timely settlement.
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
			</Stack>

			<div className={styles.ourTeam}>
				<div className={styles.treasuryOps}>
					<b className={styles.treasuryOps1}>Treasury Ops</b>
					<div className={styles.bg3} />
					<img className={styles.linkedinIcon} alt="" src="../linkedin.svg" />
					<b className={styles.ucheOkehie}>Uche Okehie</b>
					<div className={styles.jobPositionTitle}>Job position title</div>
					<div className={styles.img}>
						<div className={styles.image13} />
						<img className={styles.imgChild} alt="" src="../vector-2.svg" />
						<img
							className={styles.image12Icon}
							alt=""
							src="../image-12@2x.png"
						/>
					</div>
				</div>
				<div className={styles.product}>
					<div className={styles.div}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Tomasz Zastawny</b>
						<img className={styles.imgIcon2} alt="" src="../img7@2x.png" />
					</div>
					<div className={styles.div1}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Grace Thompson</b>
						<img className={styles.imgIcon2} alt="" src="../img8@2x.png" />
					</div>
					<div className={styles.div2}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Ron Ogheneruona</b>
						<img className={styles.imgIcon2} alt="" src="../img9@2x.png" />
					</div>
					<b className={styles.product1}>Product</b>
				</div>
				<div className={styles.engineering}>
					<div className={styles.div3}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Joseph Oladokun</b>
						<img className={styles.imgIcon2} alt="" src="../img10@2x.png" />
					</div>
					<div className={styles.div4}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Chizi Ogbonda</b>
						<img className={styles.imgIcon2} alt="" src="../img11@2x.png" />
					</div>
					<div className={styles.div5}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Rasheed Atanda</b>
						<img className={styles.imgIcon2} alt="" src="../img12@2x.png" />
					</div>
					<div className={styles.div6}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Popsana Barida</b>
						<img className={styles.imgIcon2} alt="" src="../img13@2x.png" />
					</div>
					<div className={styles.div}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Uk Chukundah</b>
						<img className={styles.imgIcon2} alt="" src="../img14@2x.png" />
					</div>
					<div className={styles.div8}>
						<div className={styles.bg4} />
						<b className={styles.pelumiSolaAremu}>Pelumi Sola-Aremu</b>
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle9}>Job position title</div>
						<img className={styles.imgIcon2} alt="" src="../img15@2x.png" />
					</div>
					<div className={styles.div2}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Ridwan Otun</b>
						<img className={styles.imgIcon2} alt="" src="../img16@2x.png" />
					</div>
					<b className={styles.product1}>Engineering</b>
				</div>
				<div className={styles.management}>
					<div className={styles.div1}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Justin Ziegler</b>
						<img className={styles.imgIcon2} alt="" src="../img17@2x.png" />
					</div>
					<div className={styles.div2}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Ife Johnson</b>
						<img className={styles.imgIcon2} alt="" src="../img18@2x.png" />
					</div>
					<b className={styles.product1}>Management</b>
				</div>
				<div className={styles.loremIpsumDolorSitAmetCo4}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit.
				</div>
				<b className={styles.ourTeam1}>Our team</b>
			</div>

			<ImageDataSplit data={splitDataContent[0]} />
		</Stack>
	);
};

export default AboutUs;
