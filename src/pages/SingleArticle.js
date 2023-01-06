import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { PageTransition } from "../components/animations";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(4, 5),
		fontFamily: theme.typography.fontFamily,
		textAlign: "justify",
		alignItems: "center",
		width: "100%",
	},
	heading: {
		fontSize: theme.typography.h5.fontSize,
		margin: theme.spacing(2, 0),
	},

	section2: {
		background: theme.palette.blue[300],
		padding: theme.spacing(4, 5),
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
					Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Etiam a aliquam nunc. Quisque egestas, enim nec euismod lobortis,
					metus ante tincidunt purus, sit amet condimentum metus urna eu velit.
					Proin justo dolor, rutrum eget est ut, ultrices bibendum ligula.
					Curabitur eget quam at quam pulvinar finibus. Maecenas quis maximus
					nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet magna
					eget, volutpat pretium massa. Pellentesque augue mi, accumsan
					consectetur tortor id, tempor rutrum tellus. Proin dictum tellus
					purus, in condimentum massa commodo eu. Sed sit amet massa bibendum,
					ultricies lectus in, laoreet metus. Phasellus ornare, enim sit amet
					pretium accumsan, felis quam aliquet ante, ac laoreet orci massa vel
					metus. Sed ex augue, fermentum nec hendrerit at, lacinia a ligula.
					Phasellus enim purus, bibendum gravida auctor ac, suscipit vel velit.
					Mauris a lectus id nibh sagittis posuere ac sit amet est. Curabitur
					nunc eros, fringilla vitae facilisis et, fermentum in lectus.
				</Typography>
				<Typography mb={4} variant="body1" fontWeight={300}>
					Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Etiam a aliquam nunc. Quisque egestas, enim nec euismod lobortis,
					metus ante tincidunt purus, sit amet condimentum metus urna eu velit.
					Proin justo dolor, rutrum eget est ut, ultrices bibendum ligula.
					Curabitur eget quam at quam pulvinar finibus. Maecenas quis maximus
					nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet magna
					eget, volutpat pretium massa. Pellentesque augue mi, accumsan
					consectetur tortor id, tempor rutrum tellus. Proin dictum tellus
					purus, in condimentum massa commodo eu. Sed sit amet massa bibendum,
					ultricies lectus in, laoreet metus. Phasellus ornare, enim sit amet
					pretium accumsan, felis quam aliquet ante, ac laoreet orci massa vel
					metus. Sed ex augue, fermentum nec hendrerit at, lacinia a ligula.
					Phasellus enim purus, bibendum gravida auctor ac, suscipit vel velit.
					Mauris a lectus id nibh sagittis posuere ac sit amet est. Curabitur
					nunc eros, fringilla vitae facilisis et, fermentum in lectus.
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
						aliquam nunc. Quisque egestas, enim nec euismod lobortis, metus ante
						tincidunt purus, sit amet condimentum metus urna eu velit. Proin
						justo dolor, rutrum eget est ut, ultrices bibendum ligula. Curabitur
						eget quam at quam pulvinar finibus. Maecenas quis maximus nisi, sed
						tempus tellus. Curabitur ex dui, tincidunt sit amet magna eget,
						volutpat pretium massa. Pellentesque augue mi, accumsan consectetur
						tortor id, tempor rutrum tellus. Proin dictum tellus purus, in
						condimentum massa commodo eu. Sed sit amet massa bibendum, ultricies
						lectus in, laoreet metus. Phasellus ornare, enim sit amet pretium
						accumsan, felis quam aliquet ante, ac laoreet orci massa vel metus.
						Sed ex augue, fermentum nec hendrerit at, lacinia a ligula.
						Phasellus enim purus, bibendum gravida auctor ac, suscipit vel
						velit. Mauris a lectus id nibh sagittis posuere ac sit amet est.
						Curabitur nunc eros, fringilla vitae facilisis et, fermentum in
						lectus.
					</Typography>
					<Typography
						variant="h5"
						mt={5}
						fontWeight={700}
						gutterBottom
						maxWidth={500}
					>
						Section subtitle goes here
					</Typography>
				</Stack>
			</Stack>
		</PageTransition>
	);
};

export default SingleArticle;
