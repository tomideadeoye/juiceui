import React from "react";

import { makeStyles } from "@mui/styles";
import JuiceAccordion from "../components/muiAccordion";
import theme from "../assets/theme";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { PageTransition } from "../components/animations";

const useStyles = makeStyles(() => ({
	container: {
		padding: theme.spacing(2, 5),
		[theme.breakpoints.down("md")]: {
			padding: theme.spacing(2, 3),
		},
		backgroundColor: theme.palette.green[100],
	},
	form: {
		borderRadius: theme.borderRadius.md,
		backgroundColor: theme.palette.white.main,
		maxWidth: 500,
		padding: theme.spacing(2, 2),
	},

	imageBrand1: {
		width: "100%",
	},
	imageBrand2: {
		width: 200,
		[theme.breakpoints.down("md")]: {
			width: 120,
		},
	},
}));

const handleSubmit = (e) => {
	e.preventDefault();
};

const ContactUs = () => {
	const styles = useStyles();

	return (
		<PageTransition>
			<Stack className={styles.container}>
				<Stack
					direction={{ sm: "column", md: "row" }}
					justifyContent="space-between"
					mt={5}
					mb={5}
					spacing={3}
				>
					<Stack spacing={3} mb={5}>
						<Typography variant="h3" fontWeight={700} gutterBottom>
							How can we help?
						</Typography>
						<Typography
							variant="body1"
							fontWeight={300}
							maxWidth={500}
							lineHeight={2}
						>
							Making a general inquiry, or you’ll like us to talk in detail?
							Tell us what you need and we will get back to you as soon as
							possible.
						</Typography>
						<Box
							component="img"
							className={styles.imageBrand1}
							alt=""
							src="../group-821.svg"
						/>

						<Typography fontSize="10px" fontWeight={100} letterSpacing=".5px">
							Diverse industry leaders use Juice
						</Typography>
					</Stack>

					<Stack className={styles.form}>
						<Box component="form" onSubmit={handleSubmit} noValidate>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="First name (required)"
								name="email"
								autoComplete="email"
								autoFocus
								borderRadius={theme.borderRadius.md}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Last name (required)"
								name="email"
								autoComplete="email"
								autoFocus
							/>{" "}
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Company email (required)"
								name="email"
								autoComplete="email"
								autoFocus
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Company (required)"
								name="email"
								autoComplete="email"
								autoFocus
							/>{" "}
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Message (required)"
								name="email"
								autoComplete="email"
								autoFocus
								multiline
								rows={5}
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{
									backgroundColor: theme.palette.grey[800],
									mt: 3,
									mb: 2,
									padding: "16px 0",
									"&:hover": {
										backgroundColor: theme.palette.primary.dark,
									},
								}}
							>
								Sign In
							</Button>
						</Box>
					</Stack>
				</Stack>

				<JuiceAccordion />
			</Stack>
		</PageTransition>
	);
};

export default ContactUs;
