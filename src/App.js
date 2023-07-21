import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import {getAllProductos} from "./Service/appService"
//var _urlOk = "http://red666.somee.com/WeatherForecast";




function App() {



  useEffect(() => {



      console.log("PUBLIC ----", process.env.PUBLIC_URL)
      const request = async ()=>{
                
        try{
         
            const response = await getAllProductos("Moto")
            console.log('response',response)

        }catch(e){
            console.log(e)
           
        }
        
    }
    request()




  }, []);

  return (
  <>
  <h1>Prueba conexion V 21-7 A</h1>
  
  <div> Mas texto</div>
  </>
  );
}

export default App;

