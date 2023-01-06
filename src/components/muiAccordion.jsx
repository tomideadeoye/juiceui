/* eslint-disable react/prop-types */
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/system";
import { makeStyles } from "@mui/styles";
import ContactButton from "./juiceButton";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(3, 0),
	},

	accordionText: {
		margin: theme.spacing(0, 2),
	},
	match: {
		margin: theme.spacing(4, 0),
		padding: theme.spacing(2, 2),
		background: theme.palette.white.main,
		borderRadius: theme.borderRadius.md,
	},
}));

export default function JuiceAccordion() {
	const styles = useStyles();

	const data = [
		{
			title: "Operating businesses",
			description:
				"Juice is a payment platform that enables businesses to send and receive payments globally. We are a licensed payment institution regulated by the Central Bank of Nigeria (CBN).",
		},

		{
			title: "Finance Managers",
			description: "",
		},
		{
			title: "BDCs and IMTOs",
			description: "",
		},
	];

	return (
		<Stack className={styles.container} spacing={4}>
			<Typography variant="h4" fontWeight="bold" data-scroll-to="benefitsText">
				Payment solutions for diverse use cases
			</Typography>
			<Typography variant="body1" fontWeight={200} mt={4}>
				Discover how we help some of Africa&apos;s leading businesses
			</Typography>
			<Stack>
				{data.map((item) => {
					return (
						<Accordion key={item.title}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls={item.title + "-content"}
								id={item.title}
							>
								<Typography
									variant="h6"
									fontWeight="bold"
									data-scroll-to="benefitsText"
									className={styles.accordionText}
								>
									{item.title}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography variant="body1" fontWeight={200}>
									{item.description}
								</Typography>
							</AccordionDetails>
						</Accordion>
					);
				})}
			</Stack>
			<Stack className={styles.match} spacing={3}>
				<Typography
					variant="h6"
					fontWeight="bold"
					data-scroll-to="benefitsText"
				>
					{" "}
					Not sure if you’re a good match?
				</Typography>
				<Typography
					variant="body1"
					fontWeight={200}
					data-scroll-to="benefitsText"
				>
					Want us to take a closer look at your idea and how you can utilize our
					products? Let’s discuss in detail.
				</Typography>
				<ContactButton color="primary" link="/contact-us" label="Contact Us" />
			</Stack>
		</Stack>
	);
}

// const navigate = useNavigate();

// const onButtonsBigSecondaryContainerClick = useCallback(() => {
// 	navigate("/contact-us");
// }, [navigate]);
