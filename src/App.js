import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

// https://github.com/CHaNGo666/conx1.git



function App() {


  

  useEffect(() => {
axios('http://red666.somee.com/WeatherForecast', {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    credentials: 'same-origin',
  }).then(response => {
    console.log(response.data);
  })

}, []);

  return (
  <>
  <h1>Prueba conexion</h1>
  
  
  </>
  );
}

export default App;

