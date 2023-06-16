import axios from 'axios';
import { useEffect } from 'react';
import './App.css';


function App() {



  useEffect(() => {


axios.get("http://red666.somee.com/WeatherForecast",{ crossdomain: true })
    .then((result)=>{
      console.log("resultado =======>>>>     ",result);
    })
    .catch((error)=>{
      console.log("Error ===========>>>     ",error);
    });


  }, []);

  return (
  <>
  <h1>Prueba conexion V 16-6 C</h1>
  
  <div> Mas texto</div>
  </>
  );
}

export default App;

