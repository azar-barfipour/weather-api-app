import Layout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const fectchData = async () => {
    const res = await fetch(
      "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=7d5690407248ecb387de5b3061a477f5"
    );
    const data = await res.json();
    console.log(data);
    // let loadedData = [];
    // for (const item in data) {
    //   loadedData.push({
    //     id: item[cod],
    //     city: item[cod].city,
    //   });
    // }
    setData(data.list);
  };

  useEffect(() => {
    fectchData();
  }, []);
  return (
    <Layout>
      <Routes>
        <Route path="home" element={<Home data={data} />} />
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="location" element={<Location />} />
      </Routes>
    </Layout>
  );
}

export default App;
