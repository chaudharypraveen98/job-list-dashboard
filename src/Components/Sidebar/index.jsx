import styles from "./styles.module.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VerticalAlignTopOutlinedIcon from "@mui/icons-material/VerticalAlignTopOutlined";
const Sidebar = ({ sidebarActive, setSidebarActive }) => {
  return (
    <div
      className={styles.sidebar}
      onClick={() => setSidebarActive(!sidebarActive)}
      style={sidebarActive ? { width: "25%" } : { width: "5%" }}
    >
      <div className={styles.dashboard}>
        <HomeOutlinedIcon sx={{fontSize:32}} />
        {sidebarActive ? <h3>Dashboard</h3> : <></>}
      </div>
      <div className={styles.arrow}>
        <VerticalAlignTopOutlinedIcon
          style={
            sidebarActive
              ? { transform: "rotate(270deg)" }
              : { transform: "rotate(90deg)" }
          }
        />
      </div>
    </div>
  );
};

export default Sidebar;
