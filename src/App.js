import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

//  axios.get("http://red666.somee.com/WeatherForecast",{ crossdomain: true })
function App() {



  useEffect(() => {

    const config = {
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTION",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, X-Requested-With"
      },
      crossdomain: true
    };


    axios.get("http://red666.somee.com/WeatherForecast",config)
    .then((result)=>{
      console.log("resultado =======>>>>     ",result);
    })
    .catch((error)=>{
      console.log("Error ===========>>>     ",error);
    });


  }, []);

  return (
  <>
  <h1>Prueba conexion Dom 11-6 g</h1>
  
  <div> Mas texto</div>
  </>
  );
}

export default App;

