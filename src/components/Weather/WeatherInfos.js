import WeatherInfo from "./WeatherInfo";
const WeatherInfos = (props) => {
  const data = props.wertherInfos;
  return (
    <ul>
      {data.map((item) => {
        return <WeatherInfo dt={item.dt} />;
      })}
    </ul>
  );
};
export default WeatherInfos;
