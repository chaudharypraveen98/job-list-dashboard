import { useEffect } from "react";
import styles from "./styles.module.scss";
import Stats from "./Stats";
import ApplicantCard from "./ApplicantCard";
import JobBoard from "./JobBoard";
import LatestCandidates from "../LatestCandidates";
import JobPosting from "../JobPosting";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardData } from "@/store/Dashboard/action";
const HeroSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashboardData());
  }, []);

  const { dashboardData } = useSelector((state) => state.dashboardData) || {};

  console.log("fetched from ", dashboardData);

  const {
    ai_credits,
    applicant_reviewed,
    total_applicants,
    total_jobs,
    recentJobApplicants = [],
    recentJobOpenings = [],
  } = dashboardData || {};

  return (
    <div className={styles.heroSectionContainer}>
      <div className={styles.heroSection}>
        <div className={styles.heroHeading}>
          <h3>Welcome back, Praveen</h3>
          <p>
            Heres whats changed in your talent hunt journey! You can evaluate
            candidates, attract job seekers, and redefine the candidate
            experience for a new era of your workplace from here
          </p>
        </div>
        <div className={styles.cards}>
          <Stats
            ai_credits={ai_credits}
            total_jobs={total_jobs}
            total_applicants={total_applicants}
          />
          <ApplicantCard
            applicant_reviewed={applicant_reviewed}
            total_applicants={total_applicants}
          />
          <JobBoard />
        </div>
      </div>
      <div className={styles.candidatesContainer}>
        <LatestCandidates recentJobApplicants={recentJobApplicants} />
        <JobPosting recentJobOpenings={recentJobOpenings} />
      </div>
    </div>
  );
};
export default HeroSection;
