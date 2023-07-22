// import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import {getByTiempo} from "./Service/appService"
//var _urlOk = "http://red666.somee.com/WeatherForecast";




function App() {



  useEffect(() => {

      const request = async ()=>{
        try{
            const response = await getByTiempo()
            console.log('response ',response)

        }catch(e){
            console.log(e)
           
        }
    }
    request()





  }, []);

  return (
  <>
  <h1>Prueba conexion V 21-7 A1</h1>
  
  <div> Mas texto</div>
  </>
  );
}

export default App;

