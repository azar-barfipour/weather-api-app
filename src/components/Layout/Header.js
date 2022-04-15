import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { FaHome, FaMapMarker } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isActiveHome = location.pathname === "/home";
  const isActiveLocation = location.pathname === "/location";

  console.log(isActiveHome);
  console.log(isActiveLocation);
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
            <FaHome
              className={`${classes["header__icon"]} ${
                isActiveHome ? classes["header__active"] : ""
              }`}
            />
          </Link>
        </li>
        <li className={classes["header__item"]}>
          <Link to="/location" className={classes["header__link"]}>
            <FaMapMarker
              className={`${classes["header__icon"]} ${
                isActiveLocation ? classes["header__active"] : ""
              }`}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
