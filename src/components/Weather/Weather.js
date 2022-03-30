import WeatherInfos from "./WeatherInfos";
import classes from "./Weather.module.css";

const Weather = ({ weatherData }) => {
  return <WeatherInfos weatherInfos={weatherData} />;
};
export default Weather;
