import axios from 'axios';
import { useEffect } from 'react';
import './App.css';


function App() {



  useEffect(() => {


    axios.get("http://red666.somee.com/WeatherForecast",{ crossdomain: true }).then((result)=>{
      console.log("result",result);
    }).catch((error)=>{
      console.log("Error",error);
    });


  }, []);

  return (
  <>
  <h1>Prueba conexion Dom 11-6 b</h1>
  
  <div> Mas texto</div>
  </>
  );
}

export default App;

