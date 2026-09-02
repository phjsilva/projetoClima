import { createContext } from "react";
import type { City, Forecast } from "../types/weather";

export interface weatherContextValue {
  cities: City[];
  findCities: (name: string) => void;
  cityForecast: (id: number) => void;
  foreCast: Forecast | null
  error: string
  loadingMessage: string
}

export const weatherContext = createContext<weatherContextValue | undefined>(
  undefined,
);
