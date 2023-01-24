import logo from './logo.svg';
import './App.css';
import { useState } from 'react';






export default function App() {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };//creo una variable con estilo css
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>{/**pongo el stylo que tengo en la constate */}
      <p>Add a little style!</p>
    </>
  );
}
