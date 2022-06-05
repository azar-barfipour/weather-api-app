import WeatherInfo from "./WeatherInfo";
import classes from "./WeatherInfos.module.css";
import { AnimationWrapper } from "react-hover-animation";

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
  const day = new Date().toLocaleString("en-us", { weekday: "short" });
  const month = new Date().toLocaleString("en-us", { month: "short" });
  const dayNumber = new Date().toLocaleString("en-us", { day: "2-digit" });
  const date = `${day}, ${month} ${dayNumber}`;

  return (
    <div className={classes["weather-wrapper"]}>
      <div className={classes["weather"]}>
        <AnimationWrapper>
          <div
            className={`${classes["weather-content"]} ${
              isRain === "Rain" ||
              (isRain === "Drizzle" && classes["weather-rain"]) ||
              (isCould === "Clouds" && classes["weather-clouds"]) ||
              (isSun === "Sun" && classes["weather-sun"])
            }`}
          >
            <section className={classes["weather_section"]}>
              <li className={classes["weather_item"]}>{data.name}</li>
              <li
                className={`${classes["weather_item"]}  ${classes["weather_date"]}`}
              >{`${date}`}</li>
              <li
                className={`${classes["weather_item"]} ${classes["weather_time"]}`}
              >{`${time}`}</li>
            </section>
            <section className={classes["weather_section"]}>
              <li
                className={`${classes["weather_item"]} ${classes["weather_deg"]}`}
              >
                {data.main.temp.toFixed(0)} &deg;
              </li>
              <li
                className={`${classes["weather_item"]} ${classes["weather_min_max"]}`}
              >
                {`${data.main.temp_max.toFixed(0)} `}&deg;
                {`/${data.main.temp_min.toFixed(0)}`} &deg;
              </li>
              <div>
                {data.weather.map((item) => {
                  return <WeatherInfo key={item.id} weather={item.main} />;
                })}
              </div>
            </section>
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
};
export default WeatherInfos;
