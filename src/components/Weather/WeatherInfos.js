import WeatherInfo from "./WeatherInfo";
import classes from "./WeatherInfos.module.css";
const WeatherInfos = (props) => {
  const data = props.weatherInfos;
  console.log(data);

  const isRain = data.weather[0].main;
  const isCould = data.weather[0].main;
  const isSun = data.weather[0].main;
  return (
    <ul
      className={`${classes["weather-wrapper"]} ${
        isRain === "Rain" ||
        (isRain === "Drizzle" && classes["weather-rain"]) ||
        (isCould === "Clouds" && classes["weather-clouds"]) ||
        (isSun === "Sun" && classes["weather-sun"])
      }`}
    >
      <li className={classes["weather_item"]}>{data.name}</li>
      <li className={classes["weather_item"]}>{data.main.temp}</li>
      <li className={classes["weather_item"]}>{data.sys.sunrise}</li>
      <li className={classes["weather_item"]}>{data.sys.sunset}</li>
      <div>
        {data.weather.map((item) => {
          return <WeatherInfo weather={item.main} />;
        })}
      </div>
    </ul>
  );
};
export default WeatherInfos;
