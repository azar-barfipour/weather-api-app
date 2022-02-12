import Weather from "../components/Weather/Weather";
const Home = (props) => {
  const dataFromApi = props.data;
  console.log(dataFromApi);
  return <Weather weatherData={dataFromApi} />;
};
export default Home;
