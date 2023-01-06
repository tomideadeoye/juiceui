/* eslint-disable react/prop-types */
import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import theme from "../assets/theme";
import { motion } from "framer-motion";

const useStyles = makeStyles(() => ({}));

export default function Idcard({ data }) {
	const styles = useStyles();

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
			<Stack
				sx={{
					borderRadius: theme.borderRadius.md,
					width: 300,
					marginBottom: theme.spacing(2),
				}}
			>
				<img src={data.image} alt="" />
				<Stack
					spacing={2}
					sx={{
						background: theme.palette.white.main,
						padding: theme.spacing(2, 2),
						borderRadius: `0 0 ${theme.borderRadius.md} ${theme.borderRadius.md}`,
					}}
				>
					<Typography variant="h6" fontWeight="bold">
						{data.name}
					</Typography>
					<Typography variant="body1" fontWeight={300}>
						Job position title
					</Typography>
					<img
						className={styles.linkedinIcon1}
						alt=""
						src="../linkedin.svg"
						width={20}
					/>
				</Stack>
			</Stack>
		</motion.div>
	);
}
