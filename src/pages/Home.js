import Weather from "../components/Weather/Weather";

const Home = ({ weatherData }) => {
  return <div>{weatherData && <Weather weatherData={weatherData} />}</div>;
};
export default Home;
