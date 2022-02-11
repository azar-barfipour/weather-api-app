import { useEffect } from "react";

function App() {
  const fectchData = async () => {
    const res = await fetch(
      "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=7d5690407248ecb387de5b3061a477f5"
    );
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fectchData();
  }, []);
  return <div>Hi the main part will be goes here</div>;
}

export default App;
