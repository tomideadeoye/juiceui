/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import theme from "../assets/theme";
import { AnimationMakerCards } from "./animations";

const useStyles = makeStyles(() => ({
	image: {
		width: 300,
		alignSelf: "center",
		[theme.breakpoints.down("md")]: {
			width: "60%",
		},
	},
}));

export default function Idcard({ data }) {
	const styles = useStyles();

	return (
		<AnimationMakerCards>
			<Stack alignItems={{ md: "center", lg: "flex-start" }}>
				<Stack
					sx={{
						borderRadius: theme.borderRadius.md,
						marginBottom: theme.spacing(2),
					}}
					className={styles.image}
				>
					<Box component="img" src={data.image} alt="" sx={{}} />
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
			</Stack>
		</AnimationMakerCards>
	);
}
