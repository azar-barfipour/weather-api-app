import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { useState } from "react";
import { getGeocode, getLatLng } from "use-places-autocomplete";

const Search = ({ panTo }) => {
  const [value, setValue] = useState("");

  const locationSearchHandler = (e) => {
    setValue(e.target.value);
  };

  const getLocationHandler = async (e) => {
    e.preventDefault();
    // get lat and lng from address
    console.log(value);
    const results = await getGeocode({ address: value });
    const { lat, lng } = await getLatLng(results[0]);
    console.log(results);
    panTo({ lat, lng });
    // setLat(mapData.results[0].geometry.location.lat);
    // setLnt(mapData.results[0].geometry.location.lng);
  };

  return (
    <Combobox>
      <ComboboxInput placeholder="search" onChange={locationSearchHandler} />
      <button onClick={getLocationHandler}>search</button>
    </Combobox>
  );
};
export default Search;
