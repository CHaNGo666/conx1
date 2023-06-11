import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

// https://github.com/CHaNGo666/conx1.git



function App() {




  useEffect(() => {

  const headers = {
    "Content-Type": "application/json",
   // Authorization: apiKey,
  };
  const url = "http://red666.somee.com/WeatherForecast";

  axios.get(url, { headers }).then(response => {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log("ERROR > ", error);
  });

}, []);

  return (
  <>
  <h1>Prueba conexion</h1>
  
  
  </>
  );
}

export default App;

