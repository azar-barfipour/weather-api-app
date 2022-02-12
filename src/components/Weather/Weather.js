import WeatherInfos from "./WeatherInfos";
const Weather = (props) => {
  console.log(props.weatherData);
  return <WeatherInfos wertherInfos={props.weatherData} />;
};
export default Weather;
