import WeatherInfo from "./WeatherInfo";
import classes from "./WeatherInfos.module.css";
const WeatherInfos = ({ weatherInfos }) => {
  const data = weatherInfos;
  const isRain = data.weather[0].main;
  const isCould = data.weather[0].main;
  const isSun = data.weather[0].main;
  const time = new Date().toLocaleTimeString("en-us", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <ul
      className={`${classes["weather-wrapper"]} ${
        isRain === "Rain" ||
        (isRain === "Drizzle" && classes["weather-rain"]) ||
        (isCould === "Clouds" && classes["weather-clouds"]) ||
        (isSun === "Sun" && classes["weather-sun"])
      }`}
    >
      <section className={classes["weather_section1"]}>
        <li className={classes["weather_item"]}>{data.name}</li>
        <li
          className={`${classes["weather_item"]} ${classes["weather_time"]}`}
        >{`${time}`}</li>
      </section>
      <section className={classes["weather_section2"]}>
        <li className={`${classes["weather_item"]} ${classes["weather_deg"]}`}>
          {data.main.temp.toFixed(0)} &deg;
        </li>
        <li className={classes["weather_item"]}>{data.main.max}</li>
        <li className={classes["weather_item"]}>{data.main.min}</li>
        <div>
          {data.weather.map((item) => {
            return <WeatherInfo weather={item.main} />;
          })}
        </div>
      </section>
    </ul>
  );
};
export default WeatherInfos;
