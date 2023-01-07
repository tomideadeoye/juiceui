/* eslint-disable react/prop-types */
import { AnimatePresence, motion, useScroll } from "framer-motion";
import React from "react";

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
		<motion.div
			drag
			dragConstraints={{
				top: -50,
				left: -50,
				right: 50,
				bottom: 50,
			}}
		>
			{children}
		</motion.div>
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
