import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");//multiles valores

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>{/**enlazo con las variables */}
    </>
  )
}

function App() {

//creo el componente
  return (
    <div className="App">
      <Car/>
    </div>
  );
}

export default App;