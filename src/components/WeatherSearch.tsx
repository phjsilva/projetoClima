import { useState, type KeyboardEvent } from "react";
import useWeather from "../hooks/useWeather";
import ForecastCard from "./ForecastCard";
import CityList from "./CityList";

export default function WeatherSearch() {
  const [cityName, setCityName] = useState("");

  const { cities, findCities, foreCast, error, loadingMessage } = useWeather();

  async function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      if(cityName.trim()){
        findCities(cityName.trim());
      }
    }
  }

  return (
    <>
      <input
        className="city-input"
        type="text"
        placeholder="Ex.: Guararema"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loadingMessage !== ""}
      />
      {error && <p className="error message">{error}</p>}
      {loadingMessage && <p className="message">{loadingMessage}</p>}
      {cities.length > 0 && <CityList/>}
      { foreCast && <ForecastCard/>}
    </>
  );
}
