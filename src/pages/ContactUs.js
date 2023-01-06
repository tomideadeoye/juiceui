import React from "react";

import { makeStyles } from "@mui/styles";
import JuiceAccordion from "../components/muiAccordion";
import theme from "../assets/theme";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

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
		// width: "100%",
		maxWidth: 500,
		padding: theme.spacing(2, 2),
	},
}));

const handleSubmit = (e) => {
	e.preventDefault();
};

const ContactUs = () => {
	const styles = useStyles();

	return (
		<Stack className={styles.container}>
			<Stack
				direction={{ xs: "column", md: "row" }}
				justifyContent="space-between"
				mt={5}
				mb={5}
			>
				<Stack spacing={3}>
					<Typography variant="h3" fontWeight={700} gutterBottom>
						How can we help ?
					</Typography>
					<Typography
						variant="body1"
						fontWeight={300}
						maxWidth={500}
						lineHeight={2}
					>
						Making a general inquiry, or you’ll like us to talk in detail? Tell
						us what you need and we will get back to you as soon as possible.
					</Typography>
					<img
						className={styles.credentialsChild}
						alt=""
						src="../group-821.svg"
						width={400}
					/>
					<img
						className={styles.credentialsItem}
						alt=""
						src="../group-83.svg"
						width={160}
					/>
					<Typography fontSize="10px" fontWeight={100} letterSpacing=".5px">
						Diverse industry leaders use Juice
					</Typography>
				</Stack>
				<Stack>
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
								}}
							>
								Sign In
							</Button>
						</Box>
					</Stack>
				</Stack>
			</Stack>

			<JuiceAccordion />
		</Stack>
	);
};

export default ContactUs;
