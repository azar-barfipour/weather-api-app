import {
  FaCloudRain,
  FaCloud,
  FaCloudShowersHeavy,
  FaSun,
} from "react-icons/fa";
import classes from "./WeatherInfo.module.css";

const WeatherInfo = (props) => {
  console.log(props.weather);
  return (
    <div className={classes["main-weather_wrapper"]}>
      <li className={classes["main-weather_item"]}>{props.weather}</li>
      {props.weather === "Rain" ||
        (props.weather === "Drizzle" && <FaCloudRain />)}
      {props.weather === "Clouds" && <FaCloud />}
      {props.weather === "Snow" && <FaCloudShowersHeavy />}
      {props.weather === "Sun" && <FaSun />}
    </div>
  );
};
export default WeatherInfo;
