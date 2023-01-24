import Dado from "./dado/Dado";

import { useState } from "react";

function App() {

  function generarValor() {
    return Math.trunc(Math.random() * 6) + 1//generar numero aleatorio
  }

  function tirar() {
    setNumero1(generarValor())//pongo numeros en las variables
    setNumero2(generarValor())
    setNumero3(generarValor())
  }

  const [numero1, setNumero1] = useState(generarValor())//variables que tengo que controlar, doy ya valor inicial
  const [numero2, setNumero2] = useState(generarValor())
  const [numero3, setNumero3] = useState(generarValor())
  return (
    <div>
      <Dado valor={numero1} />{/**llamo el componente y le paso numero */}
      <Dado valor={numero2} />
      <Dado valor={numero3} />
      <button onClick={tirar}>Tirar</button>{/**evento al clicar */}
    </div>
  );
}

export default App;