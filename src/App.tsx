import WeatherSearch from "./components/WeatherSearch";
import WeatherProvider from "./providers/WeatherProvider";

export default function App() {
  return (
    <WeatherProvider>
      <main className="weather-card">
        <h1>Consulta do clima</h1>
        <p className="label-search">Digite uma cidade e pressione Enter: </p>
        <WeatherSearch />
      </main>
    </WeatherProvider>
  );
}