import Weather from "../components/Weather/Weather";
const Home = (props) => {
  return (
    <div>
      {props.weatherData && <Weather weatherData={props.weatherData} />}
    </div>
  );
};
export default Home;
