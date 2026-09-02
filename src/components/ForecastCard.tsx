import useWeather from "../hooks/useWeather";

export default function ForecastCard(){
    const {foreCast} = useWeather()

    return <section className="forecast">
        <h2 id="forecast-tittle">{foreCast?.cidade} - {foreCast?.estado}</h2>
        <div className="forecast-day">
            <p>Data: {formaDate(foreCast?.clima[0].data ?? "")}</p>
            <p>Condição: {foreCast?.clima[0].condicao_desc}</p>
            <p>Temperatura mínima: {foreCast?.clima[0].min}</p>
            <p>Temperatura máxima: {foreCast?.clima[0].max}</p>
            <p>Índice UV: {foreCast?.clima[0].indice_uv}</p>
        </div>
    </section>
}

function formaDate(date:string) {
    const [year, month, day] = date.split("-")
    return `${day}/${month}/${year}`
}