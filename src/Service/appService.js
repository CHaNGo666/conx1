import axios from "../Config/axios"


export async function getByTiempo(){
    return axios.get("/WeatherForecast/") 
}


