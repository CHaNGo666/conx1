import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

// https://github.com/CHaNGo666/conx1.git

// http://red666.somee.com/WeatherForecast

// https://localhost:7006/WeatherForecast

function App() {



  useEffect(() => {


    axios.get("http://red666.somee.com/WeatherForecast",{ crossdomain: true }).then((result)=>{
      console.log("result",result);
    }).catch((error)=>{
      console.log("Error",error);
    });


 //   axios.get('http://red666.somee.com/WeatherForecast').then(response => {
 //     console.log(response.data);
  //  });



  }, []);

  return (
  <>
  <h1>Prueba conexion</h1>
  
  
  </>
  );
}

export default App;

