import { useState, type ReactNode } from "react";
import { weatherContext } from "../contexts/WeatherContext";
import { searchCities, getForecast } from "../services/weatherService";
import type { City, Forecast } from "../types/weather";


interface WeatherProviderProps {
  children: ReactNode;
}

export default function WeatherProvider({ children }: WeatherProviderProps) {
  const [cities, setCities] = useState<City[]>([]);
  const [foreCast, setForeCast] = useState<Forecast | null>(null)
  const [error, setError] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("")

  async function findCities(name: string) {
    try {
      setLoadingMessage("Buscando cidades...")
      setError("") 
      setCities([])
      setForeCast(null)

      const foundCities = await searchCities(name);
      setCities(foundCities);
    } catch (e) {
      if(e instanceof Error){
        setError(e.message);
      }
    } finally {
      setLoadingMessage("")
    }
  }

  async function cityForecast(id: number) {
    try {
      setLoadingMessage("Buscando previsão...")
      setError("")
      setCities([])
      const lista = await getForecast(id);
      setForeCast(lista)
    } catch (e) {
      if(e instanceof Error){
        setError(e.message);
      }
    }finally {
      setLoadingMessage("")
    }
  }

  return (
    <weatherContext.Provider
      value={{
        cities,
        findCities,
        cityForecast,
        foreCast,
        error,
        loadingMessage
      }}
    >
      {children}
    </weatherContext.Provider>
  );
}
