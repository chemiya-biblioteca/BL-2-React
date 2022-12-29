import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
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