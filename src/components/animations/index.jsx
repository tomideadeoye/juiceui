/* eslint-disable react/prop-types */
import { AnimatePresence, motion, useScroll } from "framer-motion";
import React from "react";
import AnimatedText from "react-animated-text-content";

export function PageTransition({ children }) {
	return (
		<AnimatePresence>
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

export function AnimationMakerCards({ children }) {
	return (
		<
			// motion.div
			// drag
			// dragConstraints={{
			// 	top: -50,
			// 	left: -50,
			// 	right: 50,
			// 	bottom: 50,
			// }}
		>
			{children}
		</
			// motion.div
		>
	);
}

export function AnimationMakerLongText({ children }) {
	const { scrollYProgress } = useScroll();

	return (
		<motion.path
			d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
			style={{ pathLength: scrollYProgress }}
		>
			{children}
		</motion.path>
	);
}

export function AnimationMakerText({ children }) {
	return (
		<AnimatedText
			type="words"
			animation={{
				x: "200px",
				y: "-20px",
				scale: 1.1,
				ease: "ease-in-out",
			}}
			animationType="float"
			interval={0.06}
			duration={0.8}
			includeWhiteSpaces
			threshold={0.1}
			rootMargin="20%"
		>
			{children}
		</AnimatedText>
	);
}

export function AnimationMakerButton({ children }) {
	return (
		<motion.div
			className="box"
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: "spring", stiffness: 400, damping: 17 }}
		>
			{children}
		</motion.div>
	);
}
