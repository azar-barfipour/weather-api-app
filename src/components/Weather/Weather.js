import WeatherInfos from "./WeatherInfos";
const Weather = (props) => {
  console.log(props.weatherData);
  return <WeatherInfos weatherInfos={props.weatherData} />;
};
export default Weather;
