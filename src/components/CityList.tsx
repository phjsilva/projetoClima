import useWeather from "../hooks/useWeather";

export default function CityList() {

  const { cities, cityForecast } = useWeather();

  return (
    <div className="city-list">
      {cities.map(function (city) {
        return (
          <button
            className="city-option"
            key={city.id}
            onClick={() => cityForecast(city.id)}
          >
            {city.nome} - {city.estado}
          </button>
        );
      })}
    </div>
  );
}
