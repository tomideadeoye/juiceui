/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";

import React from "react";

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
