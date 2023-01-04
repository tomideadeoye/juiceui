import styles from "./FrameComponent1.module.css";
import React from "react";

const FrameComponent1 = () => {
  return (
    <div className={styles.atomssectionTitleParent}>
      <div className={styles.atomssectionTitle}>
        <div className={styles.bg} />
        <div className={styles.managingGarageParent}>
          <b className={styles.managingGarage}>Desktop</b>
          <b className={styles.web1440x900Px}>1440x650 px (viewport size)</b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
