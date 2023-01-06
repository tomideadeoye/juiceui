import {
	Routes,
	Route,
	useNavigationType,
	useLocation,
} from "react-router-dom";
import Main from "./pages/HomePage/Main";
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
import AnimatedCursor from "react-animated-cursor";
import SingleArticle from "./pages/SingleArticle";
// import { Box } from "@mui/material";

function App() {
	const action = useNavigationType();
	const location = useLocation();
	const pathname = location.pathname;

	useEffect(() => {
		if (action !== "POP") {
			window.scrollTo(0, 0);
		}
	}, [action]);

	useEffect(() => {
		let title = "";
		let metaDescription = "";

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
		<>
			<Header />
			<AnimatedCursor
				innerSize={15}
				outerSize={15}
				color="124, 116, 233"
				outerAlpha={0.4}
				innerScale={0.7}
				outerScale={5}
			/>
			<Routes>
				<Route path="/" element={<Main />} />

				<Route path="/cookies" element={<Cookies />} />

				<Route path="/contact-us" element={<ContactUs />} />

				<Route path="/about-us" element={<AboutUs />} />

				<Route path="/terms-conditions" element={<TermsConditions />} />

				<Route path="/articles" element={<Articles />} />

				<Route path="/article-details" element={<SingleArticle />} />

				<Route path="/article" element={<Article />} />
			</Routes>
			<Footer />
		</>
	);
}
export default App;
