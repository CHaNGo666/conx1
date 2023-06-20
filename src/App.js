import axios from 'axios';
import { useEffect } from 'react';
import './App.css';


function App() {



  useEffect(() => {


axios.get("/api/WeatherForecast")
    .then((result)=>{
      console.log("resultado =======>>>>     ",result);
    })
    .catch((error)=>{
      console.log("Error ===========>>>     ",error);
    });


  }, []);

  return (
  <>
  <h1>Prueba conexion L 19-6 A</h1>
  
  <div> Mas texto</div>
  </>
  );
}

export default App;

