import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({}));

export default function useCases() {
	const styles = useStyles();

	return (
		<div className={styles.useCasesParent}>
			<div className={styles.useCases1}>
				<b className={styles.operatingBusinesses}>Operating businesses</b>
				<img className={styles.buttonsicon} alt="" src="../buttonsicon.svg" />
			</div>
			<div className={styles.div12}>
				<div className={styles.financeManagersParent}>
					<b className={styles.financeManagers}>Finance managers</b>
					<img
						className={styles.buttonsicon1}
						alt=""
						src="../buttonsicon.svg"
					/>
				</div>
			</div>
			<div className={styles.div12}>
				<div className={styles.financeManagersParent}>
					<b className={styles.financeManagers}>BDCs and IMTOs</b>
					<img
						className={styles.buttonsicon1}
						alt=""
						src="../buttonsicon.svg"
					/>
				</div>
			</div>
			<div className={styles.div14}>
				<div className={styles.notSureIfYoureAGoodMatcWrapper}>
					<b className={styles.notSureIfYoureAGoodMatc}>
						Not sure if you’re a good match?
					</b>
				</div>
				<div className={styles.wantUsToTakeACloserLookParent}>
					<div className={styles.wantUsToTakeACloserLook}>
						Want us to take a closer look at your idea and how you can utilize
						our products? Let’s discuss in detail.
					</div>
					<div
						className={styles.buttonsbigsecondary}
						// onClick={onButtonsBigSecondaryContainerClick}
					>
						<div className={styles.buttonsbigprimarylabelChild} />
						<b className={styles.cancel}>Contact us</b>
					</div>
				</div>
			</div>
		</div>
	);
}
