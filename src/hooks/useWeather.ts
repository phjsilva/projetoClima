import { useContext } from "react";
import { weatherContext } from "../contexts/WeatherContext";

export default function useWeather(){
    const context = useContext(weatherContext)
    if(!context){
        throw new Error("useWeather deve ser usado dentro de um WeatherProvider")
    }

    return context
}