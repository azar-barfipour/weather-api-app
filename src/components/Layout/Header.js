import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { FaHome, FaMapMarker } from "react-icons/fa";

const Header = () => {
  return (
    <div className={classes["header-wrapper"]}>
      <div>
        <img
          className={classes["header__img"]}
          src="https://www.clipartmax.com/png/full/237-2372176_weather-app-weather-app-logo.png"
          alt="logo"
          width="50"
        ></img>
      </div>
      <ul className={classes["header-list"]}>
        <li className={classes["header__item"]}>
          <Link to="/home" className={classes["header__link"]}>
            <FaHome className={classes.icon} />
          </Link>
        </li>
        <li className={classes["header__item"]}>
          <Link to="/location" className={classes["header__link"]}>
            <FaMapMarker className={classes.icon} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
