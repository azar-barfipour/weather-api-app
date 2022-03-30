import {
  FaCloudRain,
  FaCloud,
  FaCloudShowersHeavy,
  FaSun,
} from "react-icons/fa";
import classes from "./WeatherInfo.module.css";

const WeatherInfo = ({ weather }) => {
  return (
    <div className={classes["main-weather_wrapper"]}>
      <li className={classes["main-weather_item"]}>{weather}</li>
      {weather === "Rain" ||
        (weather === "Drizzle" && <FaCloudRain className={classes.icon} />)}
      {weather === "Clouds" && <FaCloud className={classes.icon} />}
      {weather === "Snow" && <FaCloudShowersHeavy className={classes.icon} />}
      {weather === "Sun" && <FaSun className={classes.icon} />}
    </div>
  );
};
export default WeatherInfo;
