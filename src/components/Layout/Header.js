import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes["header-wrapper"]}>
      <div>
        <img
          src="https://www.clipartmax.com/png/full/237-2372176_weather-app-weather-app-logo.png"
          alt="logo"
          width="50"
        ></img>
      </div>
      <ul className={classes["header-list"]}>
        <li className={classes["header__item"]}>
          <Link to="/home" className={classes["header__link"]}>
            Home
          </Link>
        </li>
        <li className={classes["header__item"]}>
          <Link to="/location" className={classes["header__link"]}>
            Location
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
