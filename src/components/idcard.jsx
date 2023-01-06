/* eslint-disable react/prop-types */
import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import theme from "../assets/theme";

const useStyles = makeStyles(() => ({}));

export default function Idcard({ data }) {
	const styles = useStyles();

	return (
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
	);
}
