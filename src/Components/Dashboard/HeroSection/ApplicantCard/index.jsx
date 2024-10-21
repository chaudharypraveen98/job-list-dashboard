import React, { useEffect } from "react";
import styles from "../Stats/styles.module.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

const Doughnut = React.lazy(() =>
  import("react-chartjs-2").then((mod) => ({ default: mod.Doughnut }))
);
const ApplicantCard = ({ applicant_reviewed = 0, total_applicants = 0 }) => {
  useEffect(() => {
    ChartJS.register(ArcElement, Tooltip, Legend);
  }, []);
  const data = {
    labels: ["Total Applicants", "Total Reviewed"],
    datasets: [
      {
        label: "",
        data: [total_applicants, applicant_reviewed],
        backgroundColor: ["rgb(227, 228, 232)", " rgb(128, 99, 206)"],
        borderColor: ["rgb(227, 228, 232)", " rgb(128, 99, 206)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout:"70%",
    plugins: {
      legend: {
        position: "right", // Position the legend to the right
        labels: {
          boxWidth: 25, // Control the size of the legend box
          padding: 10, // Add padding around the labels
          font: {
            size: 13, // Increase legend font size
          },
        },
      },
    },
  };

  return (
    <div className={styles.statCards}>
      <div className={styles.card} style={{ height: "232px", width:"100%", padding:"0 30px" }}>
        <Doughnut data={data} options={options} style={{  width:"100%" }}/>
      </div>
    </div>
  );
};

export default ApplicantCard;
