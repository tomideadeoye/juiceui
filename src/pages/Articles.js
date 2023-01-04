import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Articles.module.css";
import React from "react";

const Articles = () => {
	const navigate = useNavigate();

	const onGuidanceTextClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='bg1']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	const onUseCasesTextClick = useCallback(() => {
		const anchor = document.querySelector(
			"[data-scroll-to='paymentSolutionsFor']"
		);
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	const onBenefitsTextClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='benefitsText']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	const onDocumentationTextClick = useCallback(() => {
		navigate("/");
	}, [navigate]);

	return (
		<div className={styles.articles}>
			<div className={styles.header}>
				<img className={styles.headerChild} alt="" src="../group-1344.svg" />
				<div className={styles.sections}>
					<div className={styles.guidance} onClick={onGuidanceTextClick}>
						Guidance
					</div>
					<div className={styles.useCases} onClick={onUseCasesTextClick}>
						Use cases
					</div>
					<div className={styles.benefits} onClick={onBenefitsTextClick}>
						Benefits
					</div>
					<div className={styles.documentationWrapper}>
						<div
							className={styles.documentation}
							onClick={onDocumentationTextClick}
						>
							Documentation
						</div>
					</div>
				</div>
				<div className={styles.buttons}>
					<div className={styles.buttonsmediumsecondary}>
						<b className={styles.submit}>Contact us</b>
					</div>
				</div>
			</div>
			<img className={styles.forwardIcon} alt="" src="../forward@2x.png" />
			<div className={styles.div}>
				<div className={styles.makingAGeneralInquiryOrY}>
					Making a general inquiry, or you’ll like us to talk in detail? Tell us
					what you need and we will get back to you as soon as possible.
				</div>
				<b className={styles.articles1}>Articles</b>
			</div>
			<div className={styles.topBgIcons}>
				<img
					className={styles.juice3dIllustrationSecurityIcon}
					alt=""
					src="../juice3d-illustrationsecurity060922eo@2x.png"
				/>
				<img
					className={styles.juiceIconsBankTransfer24x2}
					alt=""
					src="../juiceiconsbanktransfer24x24-1@2x.png"
				/>
				<img
					className={styles.juiceIconsBankTransfer24x21}
					alt=""
					src="../juiceiconsbanktransfer24x24-1@2x.png"
				/>
				<img
					className={styles.juiceIconsPaymentTriggered}
					alt=""
					src="../juiceiconspaymenttriggered88x88-112@2x.png"
				/>
				<img
					className={styles.juiceIconsBankTransfer32x3}
					alt=""
					src="../juiceiconsbanktransfer32x32-2@2x.png"
				/>
				<img
					className={styles.juice3dIllustrationExchangeIcon}
					alt=""
					src="../juice3d-illustrationexchangeratev3-2@2x.png"
				/>
				<img
					className={styles.juice3dIllustrationExchangeIcon1}
					alt=""
					src="../juice3d-illustrationexchangeratev3-3@2x.png"
				/>
				<div className={styles.icons88progress}>
					<img
						className={styles.juiceIconsTransactionInPro}
						alt=""
						src="../juiceiconstransactioninprogress88x889@2x.png"
					/>
				</div>
				<div className={styles.icons88progress1}>
					<img
						className={styles.juiceIconsTransactionInPro}
						alt=""
						src="../juiceiconstransactioninprogress88x8810@2x.png"
					/>
				</div>
				<div className={styles.icons88progress2}>
					<img
						className={styles.juiceIconsTransactionInPro}
						alt=""
						src="../juiceiconstransactioninprogress88x8810@2x.png"
					/>
				</div>
				<img
					className={styles.juice3dIllustrationCvv060Icon}
					alt=""
					src="../juice3d-illustrationcvv060922eo@2x.png"
				/>
				<img
					className={styles.juice3dIllustrationCvv060Icon1}
					alt=""
					src="../juice3d-illustrationcvv060922eo1@2x.png"
				/>
			</div>
			<img className={styles.imgIcon} alt="" src="../img20@2x.png" />
			<div className={styles.articlesInner}>
				<div className={styles.groupParent}>
					<div className={styles.rectangleParent}>
						<div className={styles.groupChild} />
						<div className={styles.category}>Category</div>
					</div>
					<div className={styles.rectangleGroup}>
						<div className={styles.groupChild} />
						<div className={styles.category}>Category</div>
					</div>
					<div className={styles.rectangleContainer}>
						<div className={styles.groupChild} />
						<div className={styles.category}>Category</div>
					</div>
					<div className={styles.groupDiv}>
						<div className={styles.groupChild} />
						<div className={styles.category}>Category</div>
					</div>
					<div className={styles.rectangleParent1}>
						<div className={styles.groupChild} />
						<div className={styles.category}>Category</div>
					</div>
					<div className={styles.rectangleParent2}>
						<div className={styles.groupChild} />
						<div className={styles.category}>Category</div>
					</div>
					<b className={styles.discoverMoreOfWhatMatters}>
						Discover more of what matters to you
					</b>
				</div>
			</div>
			<div className={styles.image2Parent}>
				<img className={styles.image2Icon} alt="" src="../image-2@2x.png" />
				<b className={styles.articleTitleGoesHereAndIt}>
					Article title goes here and it should be long up to two lines
				</b>
				<div className={styles.categoryCategory}>Category • Category</div>
			</div>
			<div className={styles.image2Parent}>
				<img className={styles.image2Icon} alt="" src="../image-2@2x.png" />
				<b className={styles.articleTitleGoesHereAndIt}>
					Article title goes here and it should be long up to two lines
				</b>
				<div className={styles.categoryCategory}>Category • Category</div>
			</div>
			<div className={styles.image2Parent}>
				<img className={styles.image2Icon} alt="" src="../image-2@2x.png" />
				<b className={styles.articleTitleGoesHereAndIt}>
					Article title goes here and it should be long up to two lines
				</b>
				<div className={styles.categoryCategory}>Category • Category</div>
			</div>
			<div className={styles.image2Parent}>
				<img className={styles.image2Icon} alt="" src="../image-2@2x.png" />
				<b className={styles.articleTitleGoesHereAndIt}>
					Article title goes here and it should be long up to two lines
				</b>
				<div className={styles.categoryCategory}>Category • Category</div>
			</div>
			<div className={styles.image2Parent}>
				<img className={styles.image2Icon} alt="" src="../image-2@2x.png" />
				<b className={styles.articleTitleGoesHereAndIt}>
					Article title goes here and it should be long up to two lines
				</b>
				<div className={styles.categoryCategory}>Category • Category</div>
			</div>
			<div className={styles.image2Parent}>
				<img className={styles.image2Icon} alt="" src="../image-2@2x.png" />
				<b className={styles.articleTitleGoesHereAndIt}>
					Article title goes here and it should be long up to two lines
				</b>
				<div className={styles.categoryCategory}>Category • Category</div>
			</div>
			<div className={styles.image2Parent}>
				<img className={styles.image2Icon} alt="" src="../image-2@2x.png" />
				<b className={styles.articleTitleGoesHereAndIt}>
					Article title goes here and it should be long up to two lines
				</b>
				<div className={styles.categoryCategory}>Category • Category</div>
			</div>
			<div className={styles.image2Parent}>
				<img className={styles.image2Icon} alt="" src="../image-2@2x.png" />
				<b className={styles.articleTitleGoesHereAndIt}>
					Article title goes here and it should be long up to two lines
				</b>
				<div className={styles.categoryCategory}>Category • Category</div>
			</div>
		</div>
	);
};

export default Articles;
