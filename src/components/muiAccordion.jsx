/* eslint-disable react/prop-types */
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function JuiceAccordion({ data }) {
	return (
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
	);
}
