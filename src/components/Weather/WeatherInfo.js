const WeatherInfo = (props) => {
  console.log(props.item);
  return (
    <div>
      <li>{props.item}</li>
      {/* <li>{props.weather[0].main}</li> */}
    </div>
  );
};
export default WeatherInfo;
