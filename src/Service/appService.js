import axios from "../Config/axios"


export async function getByTiempo(id){
    return axios.get("/WeatherForecast/"+id) 
}


