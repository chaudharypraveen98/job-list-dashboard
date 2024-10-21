import React from "react";
import styles from "./styles.module.scss";
const LatestCandidates = ({ recentJobApplicants = [] }) => {
  return (
    <div className={styles.latestCandidateCard} style={{width:"51%"}}>
      <h2>Latest Candidates</h2>
      <table>
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>Job Name</th>
            <th>Rating</th>
            <th>Applied Date</th>
          </tr>
        </thead>
        <tbody>
          {(recentJobApplicants || []).slice(0, 5).map((i, index) => {
            const {
              applicant_firstName = "",
              applicant_lastName = "",
              jobPosition = "",
            } = i || {};

            const formattedDate = new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });

            return (
              <tr key={`${applicant_lastName}a@gmail.com`}>
                <td >
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"10px"}}>
                  <div>{index + 1}</div>
                  <div>{applicant_firstName}<br /> <span>{`${applicant_lastName}a@gmail.com`}</span></div>
                  </div>
                </td>
                <td>
                  {jobPosition} <br />{" "}
                  {index % 2 == 0 ? "Full time" : "Part time"}
                </td>
                <td>{index + 3.5}</td>
                <td> {formattedDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LatestCandidates;
