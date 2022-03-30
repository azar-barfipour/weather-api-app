import Weather from "../components/Weather/Weather";
import classes from "../components/Weather/Weather.module.css";

const Home = ({ weatherData }) => {
  return (
    <div className={classes["home-wrapper"]}>
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
};
export default Home;
