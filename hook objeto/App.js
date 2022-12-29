import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

function App() {


  return (
    <div className="App">
      <Car/>
    </div>
  );
}

export default App;