import React from "react";

import { makeStyles } from "@mui/styles";
import JuiceAccordion from "../components/muiAccordion";
import theme from "../assets/theme";
import { Stack, Typography } from "@mui/material";

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
		width: "100%",
		padding: theme.spacing(2, 2),
	},
}));

const ContactUs = () => {
	const styles = useStyles();

	return (
		<Stack className={styles.container}>
			<Stack
				direction={{ xs: "column", md: "row" }}
				justifyContent="space-between"
			>
				<Stack spacing={2}>
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
						<Stack
							component="form"
							onSubmit={(e) => this.handelSubmit(e)}
							spacing={2}
						>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="First name (required)"
									// defaultValue={this.state.name}
								/>
							</div>
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									placeholder="Last name (required)"
									// defaultValue={this.state.email}
								/>
							</div>
							<div className="form-check">
								<input
									type="text"
									className="form-control"
									id="exampleCheck1"
									placeholder="Company (required)"
									// defaultValue={this.state.city}
								/>
							</div>
							<div className="form-check">
								<input
									type="text"
									className="form-control"
									id="exampleCheck1"
									placeholder="Message (required)"
									// defaultValue={this.state.city}
								/>
							</div>
							<div className="form-check">
								<input
									type="text"
									className="form-control"
									id="exampleCheck1"
									placeholder="Company email (required)"
									// defaultValue={this.state.city}
								/>
							</div>
							<br />
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</Stack>
					</Stack>
				</Stack>
			</Stack>

			<JuiceAccordion />
		</Stack>
	);
};

export default ContactUs;
