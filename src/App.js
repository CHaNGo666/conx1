import axios from 'axios';
import { startTransition, useEffect } from 'react';
import './App.css';

var _urlOk = "http://red666.somee.com/WeatherForecast";




function App() {



  useEffect(() => {



      

axios.get(_urlOk)
.then((result)=>{
  console.log("resultado =======>>>>     ",result);
})
.catch((error)=>{
 console.log("Error ===========>>>     ",error);
});



  }, []);

  return (
  <>
  <h1>Prueba conexion L 19-6 B</h1>
  
  <div> Mas texto</div>
  </>
  );
}

export default App;

