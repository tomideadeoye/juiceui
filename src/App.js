import {
	Routes,
	Route,
	useNavigationType,
	useLocation,
} from "react-router-dom";
import Main from "./pages/HomePage/Main";
import FrameComponent from "./pages/FrameComponent";
import FrameComponent1 from "./pages/FrameComponent1";
import Cookies from "./pages/Cookies";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import TermsConditions from "./pages/TermsConditions";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import { useEffect } from "react";
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	global: {
		fontFamily: theme.typography.fontFamily,
	},
}));

function App() {
	const action = useNavigationType();
	const location = useLocation();
	const pathname = location.pathname;
	const styles = useStyles();

	useEffect(() => {
		if (action !== "POP") {
			window.scrollTo(0, 0);
		}
	}, [action]);

	useEffect(() => {
		let title = "";
		let metaDescription = "";

		//TODO: Update meta titles and descriptions below
		switch (pathname) {
			case "/":
				title = "";
				metaDescription = "";
				break;
			case "/frame-299":
				title = "";
				metaDescription = "";
				break;
			case "/frame-298":
				title = "";
				metaDescription = "";
				break;
			case "/cookies":
				title = "";
				metaDescription = "";
				break;
			case "/contact-us":
				title = "";
				metaDescription = "";
				break;
			case "/about-us":
				title = "";
				metaDescription = "";
				break;
			case "/terms-conditions":
				title = "";
				metaDescription = "";
				break;
			case "/articles":
				title = "";
				metaDescription = "";
				break;
			case "/article":
				title = "";
				metaDescription = "";
				break;
		}

		if (title) {
			document.title = title;
		}

		if (metaDescription) {
			const metaDescriptionTag = document.querySelector(
				'head > meta[name="description"]'
			);
			if (metaDescriptionTag) {
				metaDescriptionTag.content = metaDescription;
			}
		}
	}, [pathname]);

	return (
		<Box className={styles.globalContainer}>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />

				<Route path="/frame-299" element={<FrameComponent />} />

				<Route path="/frame-298" element={<FrameComponent1 />} />

				<Route path="/cookies" element={<Cookies />} />

				<Route path="/contact-us" element={<ContactUs />} />

				<Route path="/about-us" element={<AboutUs />} />

				<Route path="/terms-conditions" element={<TermsConditions />} />

				<Route path="/articles" element={<Articles />} />

				<Route path="/article" element={<Article />} />
			</Routes>
			<Footer />
		</Box>
	);
}
export default App;
