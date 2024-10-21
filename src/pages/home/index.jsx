import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import styles from "./styles.module.scss";
import HeroSection from "@/Components/Dashboard/HeroSection";

const HomePage = () => {
  const [sidebarActive, setSidebarActive] = useState(true);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Sidebar
          sidebarActive={sidebarActive}
          setSidebarActive={setSidebarActive}
        />
        <div
          className={styles.dashboard}
        >
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
