import classes from "./WeatherInfo.module.css";
import { Sunny, Cloudy, Rain, Snow } from "weather-styled-icon";

const WeatherInfo = ({ weather }) => {
  return (
    <div className={classes["main-weather_wrapper"]}>
      <li className={classes["main-weather_item"]}>{weather}</li>
      {weather === "Rain" && <Rain />}
      {weather === "Drizzle" && <Rain />}
      {weather === "Clouds" && <Cloudy />}
      {weather === "Snow" && <Snow />}
      {weather === "Sun" && <Sunny />}
      {weather === "Clear" && <Sunny />}
    </div>
  );
};
export default WeatherInfo;
