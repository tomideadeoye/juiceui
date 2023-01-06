import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useMediaQuery } from "@mui/material";
import theme from "../assets/theme";
import MenuIcon from "@mui/icons-material/Menu";
import { appData } from "../appTextData";

export default function MUIDrawer() {
	const [state, setState] = React.useState({
		right: false,
	});

	const handleClick = React.useCallback((text) => {
		window.location.href = text;
	}, []);

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const spaRoutesObj = {
		Documentation: appData.documentation,
		"Contact us": "/contact-us",
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{["Documentation", "Contact us"].map((text) => (
					<>
						<ListItem key={text} disablePadding>
							<ListItemButton onClick={() => handleClick(spaRoutesObj[text])}>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
						<Divider />
					</>
				))}
			</List>
		</Box>
	);

	const match = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<div>
			{["right"].map((anchor) => (
				<React.Fragment key={anchor}>
					{match && <MenuIcon onClick={toggleDrawer("right", true)} />}

					<Drawer
						anchor={anchor}
						open={state.right}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}
