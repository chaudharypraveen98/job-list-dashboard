import styles from "./styles.module.scss";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CountUp from "react-countup";

const Stats = ({ total_applicants = 0, ai_credits = 0, total_jobs = 0 }) => {
  return (
    <div className={styles.statCards} style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
      <div className={styles.card} style={{height:110}}>
        <div className={styles.cardContainer} style={{padding:"10px"}}>
          <div
            className={styles.icon}
            style={{ backgroundColor: "rgba(19, 51, 172, 1)" }}
          >
            <WorkOutlineOutlinedIcon />
          </div>
          <div>
            <h2>
              <CountUp start={0} end={total_jobs || 0} duration={2} />
            </h2>
            <h5>Total Jobs</h5>
          </div>
        </div>
        <div className={styles.cardContainer} style={{padding:"10px"}}>
          <div
            className={styles.icon}
            style={{ backgroundColor: "rgba(190, 161, 129, 1)" }}
          >
            <PeopleAltOutlinedIcon  />
          </div>
          <div>
            <h2>
              <CountUp start={0} end={total_applicants || 0} duration={2} />
            </h2>
            <h5>Applicants</h5>
          </div>
        </div>
      </div>
      <div className={styles.card} style={{ height:110 }} >
        <div className={styles.cardContainer} style={{padding:"10px"}}>
          <div
            className={styles.icon}
            style={{ backgroundColor: "rgba(19, 51, 172, 1)" }}
          >
            <WorkOutlineOutlinedIcon fontSize="large"/>
          </div>
          <div>
            <h2>
              <CountUp start={0} end={ai_credits || 0} duration={2} />
            </h2>
            <h5>Ai credits</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
