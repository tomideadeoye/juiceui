import React from "react";

import { makeStyles } from "@mui/styles";
import JuiceAccordion from "../components/muiAccordion";
import theme from "../assets/theme";

const useStyles = makeStyles(() => ({
	container: {
		padding: theme.spacing(2, 5),
		[theme.breakpoints.down("md")]: {
			padding: theme.spacing(2, 3),
		},
		backgroundColor: theme.palette.green[100],
	},
}));

const ContactUs = () => {
	const styles = useStyles();

	return (
		<div className={styles.container}>
			<div className={styles.topParent}>
				<div className={styles.top}>
					<div className={styles.groupParent}>
						<div className={styles.credentialsParent}>
							<div className={styles.credentials}>
								<div className={styles.diverseIndustryLeadersUseJ}>
									Diverse industry leaders use Juice
								</div>
								<img
									className={styles.credentialsChild}
									alt=""
									src="../group-821.svg"
								/>
								<img
									className={styles.credentialsItem}
									alt=""
									src="../group-83.svg"
								/>
							</div>
							<div className={styles.makingAGeneralInquiryOrY}>
								Making a general inquiry, or you’ll like us to talk in detail?
								Tell us what you need and we will get back to you as soon as
								possible.
							</div>
							<b className={styles.howCanWeHelp}>How can we help?</b>
						</div>
						<div className={styles.form}>
							<div className={styles.bg} />
							<div className={styles.buttonsbigprimarylabel}>
								<div className={styles.buttonsbigprimarylabelChild} />
								<b className={styles.submit1}>Submit</b>
							</div>
							<div className={styles.inputempty}>
								<div className={styles.backgroundsinputactive}>
									<div className={styles.bg1} />
								</div>
								<img
									className={styles.iconRight}
									alt=""
									src="../iconright.svg"
								/>
								<img
									className={styles.iconLeft}
									alt=""
									src="../iconright.svg"
								/>
								<div className={styles.inputTitle}>First name (required)</div>
								<div className={styles.suffix}>Suffix</div>
							</div>
							<div className={styles.inputempty1}>
								<div className={styles.backgroundsinputactive}>
									<div className={styles.bg1} />
								</div>
								<img
									className={styles.iconRight}
									alt=""
									src="../iconright.svg"
								/>
								<img
									className={styles.iconLeft}
									alt=""
									src="../iconright.svg"
								/>
								<div className={styles.inputTitle}>Last name (required)</div>
								<div className={styles.suffix}>Suffix</div>
							</div>
							<div className={styles.inputempty2}>
								<div className={styles.backgroundsinputactive}>
									<div className={styles.bg1} />
								</div>
								<img
									className={styles.iconRight}
									alt=""
									src="../iconright.svg"
								/>
								<img
									className={styles.iconLeft}
									alt=""
									src="../iconright.svg"
								/>
								<div className={styles.inputTitle}>Company (required)</div>
								<div className={styles.suffix}>Suffix</div>
							</div>
							<div className={styles.backgroundsinputactiveParent}>
								<div className={styles.backgroundsinputactive}>
									<div className={styles.bg1} />
								</div>
								<div className={styles.inputTitle3}>Message (required)</div>
							</div>
							<div className={styles.inputempty3}>
								<div className={styles.backgroundsinputactive}>
									<div className={styles.bg1} />
								</div>
								<img
									className={styles.iconRight}
									alt=""
									src="../iconright.svg"
								/>
								<img
									className={styles.iconLeft}
									alt=""
									src="../iconright.svg"
								/>
								<div className={styles.inputTitle}>
									Company email (required)
								</div>
								<div className={styles.suffix}>Suffix</div>
							</div>
						</div>
					</div>
				</div>
				<JuiceAccordion />
			</div>
		</div>
	);
};

export default ContactUs;
