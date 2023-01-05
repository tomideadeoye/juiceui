/* eslint-disable react/prop-types */
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/system";

export default function JuiceAccordion() {
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
		<Stack>
			{" "}
			<div>
				{data.map((item) => {
					return (
						<Accordion key={item.title}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls={item.title + "-content"}
								id={item.title}
							>
								<Typography>{item.title} </Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>{item.description}</Typography>
							</AccordionDetails>
						</Accordion>
					);
				})}
			</div>
		</Stack>
	);
}




// const navigate = useNavigate();

// const onButtonsBigSecondaryContainerClick = useCallback(() => {
// 	navigate("/contact-us");
// }, [navigate]);
