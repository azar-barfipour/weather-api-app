import classes from "./WeatherInfo.module.css";
import { ReactComponent as CloudSvg } from "../Icons/cloud.svg";
import { ReactComponent as RainSvg } from "../Icons/rain.svg";
import { ReactComponent as SunSvg } from "../Icons/sun.svg";
import { ReactComponent as SnowSvg } from "../Icons/snow.svg";

const WeatherInfo = ({ weather }) => {
  return (
    <div className={classes["main-weather_wrapper"]}>
      <li className={classes["main-weather_item"]}>{weather}</li>
      {weather === "Rain" ||
        (weather === "Drizzle" && <RainSvg style={{ color: "red" }} />)}
      {weather === "Clouds" && <CloudSvg style={{ color: "red" }} />}
      {weather === "Snow" && <SnowSvg />}
      {weather === "Sun" && <SunSvg />}
      {weather === "Clear" && <SunSvg />}
    </div>
  );
};
export default WeatherInfo;
