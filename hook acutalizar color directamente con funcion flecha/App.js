import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");//creo variable del color con valor inicial

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>{/** actualizo el color al hacer click*/}
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

function App() {

//llamo la funcion
  return (
    <div className="App">
      <FavoriteColor/>
    </div>
  );
}

export default App;