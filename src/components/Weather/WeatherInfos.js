import WeatherInfo from "./WeatherInfo";
const WeatherInfos = (props) => {
  const data = props.weatherInfos;
  console.log(data);
  return (
    <div>
      <div>{data.name}</div>
      <div>{data.main.temp}</div>
      <div>{data.sys.sunrise}</div>
      <div>{data.sys.sunset}</div>
    </div>
    // <ul>
    //   {data.weather.main.map((item) => {
    //     console.log(item);
    //     return <WeatherInfo item={item} />;
    //   })}
    // </ul>
  );
};
export default WeatherInfos;
