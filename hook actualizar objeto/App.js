import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });//creo del estado con valores iniciales

  const updateColor = () => {//lo mismo del anterior y cambio el color
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>{/**enlazo con los atributos */}
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>{/**al clicar llamo la funcion */}
    </>
  )
}

function App() {

//llamo ala funcion
  return (
    <div className="App">
      <Car/>
    </div>
  );
}

export default App;