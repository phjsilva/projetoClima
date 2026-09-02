export interface City {
    id: number;
    nome: string;
    estado: string
    regiao: string
}

export interface DailyForecast {
    data: string;
    condicao_desc: string
    min: number
    max: number
    indice_uv: number
}

export interface Forecast {
    cidade: string
    estado: string
    clima: DailyForecast[]
}

export interface ApiErrorResponse {
    message?: string;
}