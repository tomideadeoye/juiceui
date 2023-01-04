import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContactUs.module.css";
import React from "react";

const ContactUs = () => {
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

  const onButtonsBigSecondaryContainerClick = useCallback(() => {
    navigate("/contact-us");
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
    <div className={styles.contactUs}>
      <div className={styles.header}>
        <img className={styles.headerChild} alt="" src="../group-1341.svg" />
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
      <div className={styles.topParent}>
        <div className={styles.top}>
          <div className={styles.groupParent}>
            <div className={styles.credentialsParent}>
              <div className={styles.credentials}>
                <div className={styles.diverseIndustryLeadersUseJ}>
                  Diverse industry leaders use Juice
                </div>
                <img
                  className={styles.credentialsChild}
                  alt=""
                  src="../group-821.svg"
                />
                <img
                  className={styles.credentialsItem}
                  alt=""
                  src="../group-83.svg"
                />
              </div>
              <div className={styles.makingAGeneralInquiryOrY}>
                Making a general inquiry, or you’ll like us to talk in detail?
                Tell us what you need and we will get back to you as soon as
                possible.
              </div>
              <b className={styles.howCanWeHelp}>How can we help?</b>
            </div>
            <div className={styles.form}>
              <div className={styles.bg} />
              <div className={styles.buttonsbigprimarylabel}>
                <div className={styles.buttonsbigprimarylabelChild} />
                <b className={styles.submit1}>Submit</b>
              </div>
              <div className={styles.inputempty}>
                <div className={styles.backgroundsinputactive}>
                  <div className={styles.bg1} />
                </div>
                <img
                  className={styles.iconRight}
                  alt=""
                  src="../iconright.svg"
                />
                <img
                  className={styles.iconLeft}
                  alt=""
                  src="../iconright.svg"
                />
                <div className={styles.inputTitle}>First name (required)</div>
                <div className={styles.suffix}>Suffix</div>
              </div>
              <div className={styles.inputempty1}>
                <div className={styles.backgroundsinputactive}>
                  <div className={styles.bg1} />
                </div>
                <img
                  className={styles.iconRight}
                  alt=""
                  src="../iconright.svg"
                />
                <img
                  className={styles.iconLeft}
                  alt=""
                  src="../iconright.svg"
                />
                <div className={styles.inputTitle}>Last name (required)</div>
                <div className={styles.suffix}>Suffix</div>
              </div>
              <div className={styles.inputempty2}>
                <div className={styles.backgroundsinputactive}>
                  <div className={styles.bg1} />
                </div>
                <img
                  className={styles.iconRight}
                  alt=""
                  src="../iconright.svg"
                />
                <img
                  className={styles.iconLeft}
                  alt=""
                  src="../iconright.svg"
                />
                <div className={styles.inputTitle}>Company (required)</div>
                <div className={styles.suffix}>Suffix</div>
              </div>
              <div className={styles.backgroundsinputactiveParent}>
                <div className={styles.backgroundsinputactive}>
                  <div className={styles.bg1} />
                </div>
                <div className={styles.inputTitle3}>Message (required)</div>
              </div>
              <div className={styles.inputempty3}>
                <div className={styles.backgroundsinputactive}>
                  <div className={styles.bg1} />
                </div>
                <img
                  className={styles.iconRight}
                  alt=""
                  src="../iconright.svg"
                />
                <img
                  className={styles.iconLeft}
                  alt=""
                  src="../iconright.svg"
                />
                <div className={styles.inputTitle}>
                  Company email (required)
                </div>
                <div className={styles.suffix}>Suffix</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.paymentSolutionsForDiverse}>
          <div className={styles.discoverHowWeHelpSomeOfAParent}>
            <div className={styles.discoverHowWeHelpSomeOfA}>
              Discover how we help some of Africa’s leading businesses
            </div>
            <b className={styles.paymentSolutionsForDiverse1}>
              Payment solutions for diverse use cases
            </b>
          </div>
          <div className={styles.useCasesParent}>
            <div className={styles.useCases1}>
              <b className={styles.operatingBusinesses}>Operating businesses</b>
              <img
                className={styles.buttonsicon}
                alt=""
                src="../buttonsicon3.svg"
              />
            </div>
            <div className={styles.div}>
              <div className={styles.financeManagersParent}>
                <b className={styles.financeManagers}>Finance managers</b>
                <img
                  className={styles.buttonsicon1}
                  alt=""
                  src="../buttonsicon4.svg"
                />
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.financeManagersParent}>
                <b className={styles.financeManagers}>BDCs and IMTOs</b>
                <img
                  className={styles.buttonsicon1}
                  alt=""
                  src="../buttonsicon4.svg"
                />
              </div>
            </div>
            <div className={styles.div2}>
              <div className={styles.notSureIfYoureAGoodMatcWrapper}>
                <b className={styles.notSureIfYoureAGoodMatc}>
                  Not sure if you’re a good match?
                </b>
              </div>
              <div className={styles.wantUsToTakeACloserLookParent}>
                <div className={styles.wantUsToTakeACloserLook}>
                  Want us to take a closer look at your idea and how you can
                  utilize our products? Let’s discuss in detail.
                </div>
                <div
                  className={styles.buttonsbigsecondary}
                  onClick={onButtonsBigSecondaryContainerClick}
                >
                  <div className={styles.buttonsbigprimarylabelChild} />
                  <b className={styles.cancel}>Contact us</b>
                </div>
              </div>
            </div>
          </div>
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
                src="../logosjuiceshort1.svg"
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
    </div>
  );
};

export default ContactUs;
