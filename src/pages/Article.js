import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({}));

const Article = () => {
	const styles = useStyles();
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

	const onGroupContainer7Click = useCallback(() => {
		navigate("/");
	}, [navigate]);

	const onArticlesTextClick = useCallback(() => {
		navigate("/articles");
	}, [navigate]);

	const onContactUsTextClick = useCallback(() => {
		navigate("/contact-us");
	}, [navigate]);

	const onTermsConditionsClick = useCallback(() => {
		navigate("/terms-conditions");
	}, [navigate]);

	return (
		<div className={styles.article}>
			<div className={styles.header}>
				<img className={styles.headerChild} alt="" src="../group-1345.svg" />
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
			<div className={styles.top}>
				<div className={styles.hereGoesSomeShortSummaryW}>
					Here goes some short summary which explain the essence of the article
					but doesn’t spoil the content. It can be 3 lines long or even longer.
				</div>
				<b className={styles.articleTitleGoesHereEvenI}>
					Article title goes here even if it’s long
				</b>
				<img className={styles.image2Icon} alt="" src="../image-28@2x.png" />
			</div>
			<div className={styles.div}>
				<div className={styles.hereGoesSomeSubtitleButIt}>
					Here goes some subtitle but it might unecessary to use it as below
					goes the section content.
				</div>
				<div className={styles.paragraph1LoremIpsumDolor}>
					Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Etiam a aliquam nunc. Quisque egestas, enim nec euismod lobortis,
					metus ante tincidunt purus, sit amet condimentum metus urna eu velit.
					Proin justo dolor, rutrum eget est ut, ultrices bibendum ligula.
					Curabitur eget quam at quam pulvinar finibus. Maecenas quis maximus
					nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet magna
					eget, volutpat pretium massa. Pellentesque augue mi, accumsan
					consectetur tortor id, tempor rutrum tellus. Proin dictum tellus
					purus, in condimentum massa commodo eu. Sed sit amet massa bibendum,
					ultricies lectus in, laoreet metus. Phasellus ornare, enim sit amet
					pretium accumsan, felis quam aliquet ante, ac laoreet orci massa vel
					metus. Sed ex augue, fermentum nec hendrerit at, lacinia a ligula.
					Phasellus enim purus, bibendum gravida auctor ac, suscipit vel velit.
					Mauris a lectus id nibh sagittis posuere ac sit amet est. Curabitur
					nunc eros, fringilla vitae facilisis et, fermentum in lectus.
				</div>
				<div className={styles.paragraph2LoremIpsumDolor}>
					Paragraph 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Etiam a aliquam nunc. Quisque egestas, enim nec euismod lobortis,
					metus ante tincidunt purus, sit amet condimentum metus urna eu velit.
					Proin justo dolor, rutrum eget est ut, ultrices bibendum ligula.
					Curabitur eget quam at quam pulvinar finibus. Maecenas quis maximus
					nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet magna
					eget, volutpat pretium massa. Pellentesque augue mi, accumsan
					consectetur tortor id, tempor rutrum tellus. Proin dictum tellus
					purus, in condimentum massa commodo eu. Sed sit amet massa bibendum,
					ultricies lectus in, laoreet metus. Phasellus ornare, enim sit amet
					pretium accumsan, felis quam aliquet ante, ac laoreet orci massa vel
					metus. Sed ex augue, fermentum nec hendrerit at, lacinia a ligula.
					Phasellus enim purus, bibendum gravida auctor ac, suscipit vel velit.
					Mauris a lectus id nibh sagittis posuere ac sit amet est. Curabitur
					nunc eros, fringilla vitae facilisis et, fermentum in lectus.
				</div>
				<b className={styles.sectionTitleGoesHere}>Section title goes here</b>
			</div>
			<div className={styles.div1}>
				<div className={styles.child} />
				<div className={styles.inner}>
					<div className={styles.hereComesTheImageDescriptiParent}>
						<div className={styles.hereComesTheImageDescripti}>
							Here comes the image description. It’s optional but it may be good
							to use it anyway.
						</div>
						<div className={styles.paragraph1LoremIpsumDolor1}>
							Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Etiam a aliquam nunc. Quisque egestas, enim nec euismod
							lobortis, metus ante tincidunt purus, sit amet condimentum metus
							urna eu velit. Proin justo dolor, rutrum eget est ut, ultrices
							bibendum ligula. Curabitur eget quam at quam pulvinar finibus.
							Maecenas quis maximus nisi, sed tempus tellus. Curabitur ex dui,
							tincidunt sit amet magna eget, volutpat pretium massa.
							Pellentesque augue mi, accumsan consectetur tortor id, tempor
							rutrum tellus. Proin dictum tellus purus, in condimentum massa
							commodo eu. Sed sit amet massa bibendum, ultricies lectus in,
							laoreet metus. Phasellus ornare, enim sit amet pretium accumsan,
							felis quam aliquet ante, ac laoreet orci massa vel metus. Sed ex
							augue, fermentum nec hendrerit at, lacinia a ligula. Phasellus
							enim purus, bibendum gravida auctor ac, suscipit vel velit. Mauris
							a lectus id nibh sagittis posuere ac sit amet est. Curabitur nunc
							eros, fringilla vitae facilisis et, fermentum in lectus.
						</div>
						<img
							className={styles.image2Icon1}
							alt=""
							src="../image-29@2x.png"
						/>
						<img
							className={styles.buttonscloseIcon}
							alt=""
							src="../buttonsclose.svg"
						/>
						<img
							className={styles.buttonscloseIcon1}
							alt=""
							src="../buttonsclose1.svg"
						/>
						<b className={styles.sectionSubtitleAndSliderGo}>
							Section subtitle and slider go here
						</b>
					</div>
				</div>
				<b className={styles.sectionTitleGoesHereAndIt}>
					Section title goes here and it’s an example of a section which is
					emphasized
				</b>
				<div className={styles.hereGoesSomeSubtitleButIt1}>
					Here goes some subtitle but it might unecessary to use it as below
					goes the section content.
				</div>
				<div className={styles.loremIpsumDolorSitAmetCoParent}>
					<div className={styles.loremIpsumDolorSitAmetCo}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
						aliquam nunc. Quisque egestas, enim nec euismod lobortis, metus ante
						tincidunt purus, sit amet condimentum metus urna eu velit. Proin
						justo dolor, rutrum eget est ut, ultrices bibendum ligula. Curabitur
						eget quam at quam pulvinar finibus. Maecenas quis maximus nisi, sed
						tempus tellus. Curabitur ex dui, tincidunt sit amet magna eget,
						volutpat pretium massa. Pellentesque augue mi, accumsan consectetur
						tortor id, tempor rutrum tellus. Proin dictum tellus purus, in
						condimentum massa commodo eu. Sed sit amet massa bibendum, ultricies
						lectus in, laoreet metus. Phasellus ornare, enim sit amet pretium
						accumsan, felis quam aliquet ante, ac laoreet orci massa vel metus.
						Sed ex augue, fermentum nec hendrerit at, lacinia a ligula.
						Phasellus enim purus, bibendum gravida auctor ac, suscipit vel
						velit. Mauris a lectus id nibh sagittis posuere ac sit amet est.
						Curabitur nunc eros, fringilla vitae facilisis et, fermentum in
						lectus.
					</div>
					<b className={styles.sectionSubtitleGoesHere}>
						Section subtitle goes here
					</b>
				</div>
				<div className={styles.thisIsTheBulletListParent}>
					<div className={styles.loremIpsumDolorSitAmetCo}>
						This is the bullet list:
					</div>
					<div className={styles.bullet1Bullet2Bullet3Bul}>
						<ul className={styles.bullet1Bullet2Bullet3Bul1}>
							<li className={styles.bullet1}>Bullet 1</li>
							<li className={styles.bullet1}>Bullet 2</li>
							<li className={styles.bullet1}>Bullet 3</li>
							<li>Bullet 4</li>
						</ul>
					</div>
					<b className={styles.sectionSubtitleGoesHere}>
						Section subtitle goes here
					</b>
				</div>
			</div>
			<div className={styles.hereGoesSomeSubtitleButItParent}>
				<div className={styles.hereGoesSomeSubtitleButIt2}>
					Here goes some subtitle but it might unecessary to use it as below
					goes the section content.
				</div>
				<div className={styles.hereComesTheImageDescripti1}>
					Here comes the image description. It’s optional but it may be good to
					use it anyway.
				</div>
				<div className={styles.paragraph1LoremIpsumDolor2}>
					Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Etiam a aliquam nunc. Quisque egestas, enim nec euismod lobortis,
					metus ante tincidunt purus, sit amet condimentum metus urna eu velit.
					Proin justo dolor, rutrum eget est ut, ultrices bibendum ligula.
					Curabitur eget quam at quam pulvinar finibus. Maecenas quis maximus
					nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet magna
					eget, volutpat pretium massa. Pellentesque augue mi, accumsan
					consectetur tortor id, tempor rutrum tellus. Proin dictum tellus
					purus, in condimentum massa commodo eu. Sed sit amet massa bibendum,
					ultricies lectus in, laoreet metus. Phasellus ornare, enim sit amet
					pretium accumsan, felis quam aliquet ante, ac laoreet orci massa vel
					metus. Sed ex augue, fermentum nec hendrerit at, lacinia a ligula.
					Phasellus enim purus, bibendum gravida auctor ac, suscipit vel velit.
					Mauris a lectus id nibh sagittis posuere ac sit amet est. Curabitur
					nunc eros, fringilla vitae facilisis et, fermentum in lectus.
				</div>
				<img className={styles.image2Icon2} alt="" src="../image-29@2x.png" />
				<b className={styles.sectionTitleGoesHereAndTh}>
					Section title goes here and the image
				</b>
			</div>
			<div className={styles.hereGoesSomeSubtitleButItGroup}>
				<div className={styles.hereGoesSomeSubtitleButIt3}>
					Here goes some subtitle but it might unecessary to use it as below
					goes the section content.
				</div>
				<div className={styles.hereComesTheImageDescripti2}>
					Here comes the image description. It’s optional but it may be good to
					use it anyway.
				</div>
				<div className={styles.paragraph1LoremIpsumDolor3}>
					Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Etiam a aliquam nunc. Quisque egestas, enim nec euismod lobortis,
					metus ante tincidunt purus, sit amet condimentum metus urna eu velit.
					Proin justo dolor, rutrum eget est ut, ultrices bibendum ligula.
					Curabitur eget quam at quam pulvinar finibus. Maecenas quis maximus
					nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet magna
					eget, volutpat pretium massa. Pellentesque augue mi, accumsan
					consectetur tortor id, tempor rutrum tellus. Proin dictum tellus
					purus, in condimentum massa commodo eu. Sed sit amet massa bibendum,
					ultricies lectus in, laoreet metus. Phasellus ornare, enim sit amet
					pretium accumsan, felis quam aliquet ante, ac laoreet orci massa vel
					metus. Sed ex augue, fermentum nec hendrerit at, lacinia a ligula.
					Phasellus enim purus, bibendum gravida auctor ac, suscipit vel velit.
					Mauris a lectus id nibh sagittis posuere ac sit amet est. Curabitur
					nunc eros, fringilla vitae facilisis et, fermentum in lectus.
				</div>
				<img className={styles.image2Icon3} alt="" src="../image-211@2x.png" />
				<img
					className={styles.buttonscloseIcon2}
					alt=""
					src="../buttonsclose.svg"
				/>
				<img
					className={styles.buttonscloseIcon3}
					alt=""
					src="../buttonsclose1.svg"
				/>
				<b className={styles.sectionTitleAndSliderGoHe}>
					Section title and slider go here
				</b>
			</div>
			<div className={styles.footer}>
				<div className={styles.footerChild} />
				<div className={styles.juiceAfricaAllRightsReserParent}>
					<div className={styles.juiceAfricaAllRightsReser}>
						<p className={styles.juiceAfrica}>©2022 Juice Africa.</p>
						<p className={styles.allRightsReserved}>All rights reserved.</p>
					</div>
					<div
						className={styles.rectangleParent}
						onClick={onGroupContainer7Click}
					>
						<div className={styles.groupChild} />
						<img
							className={styles.logosjuiceShortIcon}
							alt=""
							src="../logosjuiceshort5.svg"
						/>
					</div>
				</div>
				<div className={styles.resourcesParent}>
					<b className={styles.resources}>Resources</b>
					<div className={styles.documentation1}>Documentation</div>
					<div className={styles.articles} onClick={onArticlesTextClick}>
						Articles
					</div>
				</div>
				<div className={styles.companyParent}>
					<b className={styles.resources}>Company</b>
					<div className={styles.aboutUs}>About us</div>
					<div className={styles.articles} onClick={onContactUsTextClick}>
						Contact us
					</div>
				</div>
				<div className={styles.termsConditionsParent}>
					<div
						className={styles.termsConditions}
						onClick={onTermsConditionsClick}
					>{`Terms & conditions`}</div>
					<b className={styles.resources}>Legal</b>
				</div>
			</div>
		</div>
	);
};

export default Article;
