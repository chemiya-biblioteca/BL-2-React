import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
 
  const [inputs, setInputs] = useState({});//creo variable que voy a controlar

  const handleChange = (event) => {//en un cambio recojo que ha cambiado y su nuevo valor
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))//dejo los valores de antes y pongo el nuevo
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);//muestro el contenido
  }

  return (
    <form onSubmit={handleSubmit}>{/**cuando se suba llamo la funcion */}
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />{/**enlazo con la variable o vacia */}{/**al cambiar llamo la funcion */}
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />{/**enlazo con la variable o vacia */}{/**al cambiar llamo la funcion */}
        </label>
        <input type="submit" />
    </form>
  )
 
}

export default App;
