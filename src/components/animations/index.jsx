/* eslint-disable react/prop-types */
import { AnimatePresence, motion, useCycle } from "framer-motion";
import AnimatedNumber from "react-animated-number";
import React, { useEffect, useRef, useState } from "react";

export function AnimationMaker({ children }) {
	return (
		<motion.div
			className="box"
			animate={{
				scale: [1, 2, 2, 1, 1],
				rotate: [0, 0, 180, 180, 0],
				borderRadius: ["0%", "0%", "50%", "50%", "0%"],
			}}
			transition={{
				duration: 2,
				ease: "easeInOut",
				times: [0, 0.2, 0.5, 0.8, 1],
				// repeat: Infinity,
				repeatDelay: 1,
			}}
		>
			{children}
		</motion.div>
	);
}

export function AnimationMakerFade({ children }) {
	return (
		<motion.div
			className="box"
			animate={{
				opacity: [0, 1, 1, 0],
				duration: 2,
				ease: "easeIn",
				// times: [0, 0.2, 0.8, 1],
			}}
		>
			{children}
		</motion.div>
	);
}

export function PageTransition({ children }) {
	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 5 }}
				exit={{ opacity: 0 }}
				transition={{
					duration: 2,
					ease: "easeIn",
					times: [0, 0.2, 0.8, 1],
					// repeat: Infinity,
					repeatDelay: 1,
				}}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}

export const AnimationMakerScroll = ({ children }) => {
	const scrollContainerRef = useRef(null);
	const [scrollWidth, setScrollWidth] = useState(0);
	const [xPos, setXPos] = useState(0);
	const [isScrollingRight, toggleScrollDirection] = useCycle(true, false);

	useEffect(() => {
		setScrollWidth(scrollContainerRef.current.scrollWidth);
	}, []);

	useEffect(() => {
		const scroll = () => {
			if (isScrollingRight) {
				setXPos((prevXPos) => prevXPos - 1);
			} else {
				setXPos((prevXPos) => prevXPos + 1);
			}
		};

		const interval = setInterval(scroll, 16);

		return () => clearInterval(interval);
	}, [isScrollingRight]);

	return (
		<motion.div
			ref={scrollContainerRef}
			style={{
				display: "flex",
				overflowX: "scroll",
				scrollBehavior: "smooth",
				scrollSnapType: "x mandatory",
			}}
			onScroll={(e) => {
				if (e.target.scrollLeft === 0) {
					toggleScrollDirection();
				} else if (e.target.scrollLeft === scrollWidth - e.target.offsetWidth) {
					toggleScrollDirection();
				}
			}}
			scrollLeft={xPos}
		>
			{children}
		</motion.div>
	);
};

export const AnimationMakerCards = ({ children }) => {
	return (
		<motion.div
			className="box"
			whileHover={{
				scale: 1.2,
			}}
			whileTap={{ scale: 0.8 }}
			transition={{
				duration: 1,
				ease: "easeInOut",
				times: [0, 0.2, 0.5, 0.8, 1],
				// repeat: Infinity,
				// repeatDelay: 1,
			}}
		>
			{children}
		</motion.div>
	);
};

export function NumberAnimator({ number }) {
	return (
		<AnimatedNumber
			style={{
				transition: "0.8s ease-out",
				transitionProperty: "background-color, color",
			}}
			frameStyle={(perc) =>
				perc === 100 ? {} : { backgroundColor: "#ffeb3b" }
			}
			stepPrecision={0}
			value={number}
			formatValue={(n) =>
				`Animated numbers are ${n} ` + "times more awesome than regular ones"
			}
		/>
	);
}
