import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({}));

const Cookies = () => {
	const styles = useStyles();
	return (
		<div className={styles.cookies}>
			<div className={styles.atomsicons24walletDeposit}>
				<img
					className={styles.merchantDeposiy1}
					alt=""
					src="../merchant-deposiy-1@2x.png"
				/>
			</div>
			<div className={styles.thisWebsiteUsesCookiesLea}>
				<span>{`This website uses cookies. `}</span>
				<b className={styles.learnMore}>Learn more</b>
				<span>.</span>
			</div>
			<div className={styles.buttonsmediumsecondary}>
				<b className={styles.submit}>Accept</b>
			</div>
		</div>
	);
};

export default Cookies;
