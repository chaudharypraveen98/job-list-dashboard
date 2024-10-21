import styles from "./styles.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import user from "../../assets/profile.jpeg";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <h2>Onefinet</h2>
      </div>
      <div className={styles.navAction}>
        <div>
          <SearchIcon />
          <input placeholder="Start Searching" />
        </div>
        <NotificationsNoneOutlinedIcon />
        <SettingsOutlinedIcon />
        <AppsOutlinedIcon />
        <img src={user} width={24} height={24} style={{borderRadius:"50%"}} />
      </div>
    </div>
  );
};

export default Navbar;
