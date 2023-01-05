import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutUs.module.css";
import React from "react";

const AboutUs = () => {
	const navigate = useNavigate();

	const onButtonsBigPrimaryLabelContainerClick = useCallback(() => {
		navigate("/contact-us");
	}, [navigate]);

	return (
		<div className={styles.aboutUs}>
			<div className={styles.top}>
				<div className={styles.forOneYearJuiceHasBeenI}>
					For one year, Juice has been innovating with payment technology. With
					every iteration, we move closer to our ultimate goal - to get global
					payments to the safest, quickest and most inexpensive it can be.
				</div>
				<b className={styles.aboutUs1}>About us</b>
				<img className={styles.imgIcon} alt="" src="../img5@2x.png" />
			</div>
			<div className={styles.juiceValues}>
				<div className={styles.vaule3}>
					<div className={styles.bg} />
					<img
						className={styles.juiceIconsTransactionInPro}
						alt=""
						src="../juiceiconstransactioninprogress88x88@2x.png"
					/>
					<div className={styles.loremIpsumDolorSitAmetCo}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc
						arcu, iaculis quis ipsum vel, efficitur venenatis lacus. Nulla
						mattis nulla sem, a tempor urna vehicula sit amet.
					</div>
					<b className={styles.loremIpsum}>Lorem ipsum</b>
				</div>
				<div className={styles.vaule2}>
					<div className={styles.bg} />
					<img
						className={styles.juiceIconsTransactionInPro}
						alt=""
						src="../juiceiconstransactioninprogress88x88@2x.png"
					/>
					<div className={styles.loremIpsumDolorSitAmetCo}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc
						arcu, iaculis quis ipsum vel, efficitur venenatis lacus. Nulla
						mattis nulla sem, a tempor urna vehicula sit amet.
					</div>
					<b className={styles.loremIpsum1}>Lorem ipsum</b>
				</div>
				<div className={styles.vaule1}>
					<div className={styles.bg2} />
					<img className={styles.imgIcon1} alt="" src="../img6@2x.png" />
					<div className={styles.loremIpsumDolorSitAmetCo2}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc
						arcu, iaculis quis ipsum vel, efficitur venenatis lacus. Nulla
						mattis nulla sem, a tempor urna vehicula sit amet.
					</div>
					<b className={styles.loremIpsum2}>Lorem ipsum</b>
				</div>
				<div className={styles.loremIpsumDolorSitAmetCo3}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</div>
				<b className={styles.juiceValues1}>Juice values</b>
			</div>
			<div className={styles.ourTeam}>
				<div className={styles.treasuryOps}>
					<b className={styles.treasuryOps1}>Treasury Ops</b>
					<div className={styles.bg3} />
					<img className={styles.linkedinIcon} alt="" src="../linkedin.svg" />
					<b className={styles.ucheOkehie}>Uche Okehie</b>
					<div className={styles.jobPositionTitle}>Job position title</div>
					<div className={styles.img}>
						<div className={styles.image13} />
						<img className={styles.imgChild} alt="" src="../vector-2.svg" />
						<img
							className={styles.image12Icon}
							alt=""
							src="../image-12@2x.png"
						/>
					</div>
				</div>
				<div className={styles.product}>
					<div className={styles.div}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Tomasz Zastawny</b>
						<img className={styles.imgIcon2} alt="" src="../img7@2x.png" />
					</div>
					<div className={styles.div1}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Grace Thompson</b>
						<img className={styles.imgIcon2} alt="" src="../img8@2x.png" />
					</div>
					<div className={styles.div2}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Ron Ogheneruona</b>
						<img className={styles.imgIcon2} alt="" src="../img9@2x.png" />
					</div>
					<b className={styles.product1}>Product</b>
				</div>
				<div className={styles.engineering}>
					<div className={styles.div3}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Joseph Oladokun</b>
						<img className={styles.imgIcon2} alt="" src="../img10@2x.png" />
					</div>
					<div className={styles.div4}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Chizi Ogbonda</b>
						<img className={styles.imgIcon2} alt="" src="../img11@2x.png" />
					</div>
					<div className={styles.div5}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Rasheed Atanda</b>
						<img className={styles.imgIcon2} alt="" src="../img12@2x.png" />
					</div>
					<div className={styles.div6}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Popsana Barida</b>
						<img className={styles.imgIcon2} alt="" src="../img13@2x.png" />
					</div>
					<div className={styles.div}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Uk Chukundah</b>
						<img className={styles.imgIcon2} alt="" src="../img14@2x.png" />
					</div>
					<div className={styles.div8}>
						<div className={styles.bg4} />
						<b className={styles.pelumiSolaAremu}>Pelumi Sola-Aremu</b>
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle9}>Job position title</div>
						<img className={styles.imgIcon2} alt="" src="../img15@2x.png" />
					</div>
					<div className={styles.div2}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Ridwan Otun</b>
						<img className={styles.imgIcon2} alt="" src="../img16@2x.png" />
					</div>
					<b className={styles.product1}>Engineering</b>
				</div>
				<div className={styles.management}>
					<div className={styles.div1}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Justin Ziegler</b>
						<img className={styles.imgIcon2} alt="" src="../img17@2x.png" />
					</div>
					<div className={styles.div2}>
						<div className={styles.bg4} />
						<img
							className={styles.linkedinIcon1}
							alt=""
							src="../linkedin.svg"
						/>
						<div className={styles.jobPositionTitle1}>Job position title</div>
						<b className={styles.tomaszZastawny}>Ife Johnson</b>
						<img className={styles.imgIcon2} alt="" src="../img18@2x.png" />
					</div>
					<b className={styles.product1}>Management</b>
				</div>
				<div className={styles.loremIpsumDolorSitAmetCo4}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit.
				</div>
				<b className={styles.ourTeam1}>Our team</b>
			</div>
			<div className={styles.allTheGuidanceYoullNeed}>
				<div className={styles.bg16} />
				<img className={styles.imgIcon14} alt="" src="../img4@2x.png" />
				<div
					className={styles.buttonsbigprimarylabel}
					onClick={onButtonsBigPrimaryLabelContainerClick}
				>
					<div className={styles.buttonsbigprimarylabelChild} />
					<b className={styles.submit1}>Contact us</b>
				</div>
				<div className={styles.checkmarks}>
					<div className={styles.makeSureYourResumeIsAttacParent}>
						<div className={styles.makeSureYourResumeIsAttac}>
							Make sure your resume is attached
						</div>
						<div className={styles.icons88success}>
							<img
								className={styles.juiceIconsPaymentTriggered}
								alt=""
								src="../juiceiconspaymenttriggered88x88-1@2x.png"
							/>
						</div>
					</div>
					<div className={styles.weValueSkillsTheMostParent}>
						<div className={styles.makeSureYourResumeIsAttac}>
							We value skills the most
						</div>
						<div className={styles.icons88success}>
							<img
								className={styles.juiceIconsPaymentTriggered}
								alt=""
								src="../juiceiconspaymenttriggered88x88-1@2x.png"
							/>
						</div>
					</div>
					<div className={styles.wellReplyToEveryEmailRegParent}>
						<div className={styles.makeSureYourResumeIsAttac}>
							We’ll reply to every email regardless of the decision
						</div>
						<div className={styles.icons88success}>
							<img
								className={styles.juiceIconsPaymentTriggered}
								alt=""
								src="../juiceiconspaymenttriggered88x88-1@2x.png"
							/>
						</div>
					</div>
				</div>
				<b className={styles.doYouThinkYoureAGoodFit}>
					Do you think you’re a good fit?
				</b>
				<div
					className={styles.evenThoughWeMayNotBeLook}
				>{`Even though we may not be looking for talents and the moment we are open to any inquiries. Reach out to us and convince why we should work toghether. `}</div>
			</div>
		</div>
	);
};

export default AboutUs;
