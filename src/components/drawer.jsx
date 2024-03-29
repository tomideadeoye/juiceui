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
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	BackdropProps: {
		background: "transparent",
	},
	link: theme.links,
}));

export default function MUIDrawer() {
	const [state, setState] = React.useState({
		right: false,
	});

	const classes = useStyles();

	// const handleClick = React.useCallback((text) => {
	// 	window.location.href = text;
	// }, []);

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
		Home: "/",
		Documentation: appData.documentation,
		"About us": "/about-us",
		"Contact us": "/contact-us",
		"Terms & Conditions": "/terms-conditions",
		Articles: "/articles",
	};

	const list = (anchor) => (
		<Box
			sx={{
				width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
				// backgroundColor: "rgba(0, 0, 0, 0.6)",
				height: "100%",
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{[
					"Home",
					"About us",
					"Contact us",
					"Terms & Conditions",
					"Articles",
				].map((text) => (
					<>
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<Link className={classes.link} to={spaRoutesObj[text]}>
									<ListItemText primary={text} />
								</Link>
							</ListItemButton>
						</ListItem>

						<Divider />
					</>
				))}
				<ListItem disablePadding>
					<ListItemButton>
						<a
							className={classes.link}
							href={spaRoutesObj["Documentation"]}
							target="_blank"
							rel="noreferrer"
						>
							<ListItemText primary={"Documentation"} />
						</a>
					</ListItemButton>
				</ListItem>
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
						ModalProps={{
							BackdropProps: {
								classes: {
									root: classes.BackdropProps,
								},
							},
						}}
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
