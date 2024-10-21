import React from "react";
import styles from "@/Components/Dashboard/HeroSection/Stats/styles.module.scss";
import  illustration from "../../../../assets/illustration.png";
const JobBoard = () => {
  return (
    <div className={styles.statCards}>
      <div className={styles.card} style={{ flexDirection: "column", alignItems:"flex-start", height:"100%" }}>
        <img src={illustration} alt="illustration" style={{ width: "100%", height:"100%" }} />
        <h5 className={styles.jobBoardHeading}>Private Job Board</h5>
        <p className={styles.jobBoardDesc}>
          Your private job posting will appear here, accessible to the public
          via a company-specific URL.
        </p>
      </div>
    </div>
  );
};

export default JobBoard;
