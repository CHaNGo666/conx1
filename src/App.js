import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

//var _urlOk = "http://red666.somee.com/WeatherForecast";




function App() {



  useEffect(() => {



      



    // Hacer una petición para un usuario con ID especifico
    axios.get('http://red666.somee.com/WeatherForecast')
      .then(function (response) {
        // manejar respuesta exitosa
        console.log("resultado =======>>>>     ",response);
      })
      .catch(function (error) {
        // manejar error
        console.log("resultado =======>>>>     ",error);
      })
      .finally(function () {
        // siempre sera executado"resultado =======>>>>     ",
        console.log("Finally")
      });





  }, []);

  return (
  <>
  <h1>Prueba conexion J 29-6 I</h1>
  
  <div> Mas texto</div>
  </>
  );
}

export default App;

