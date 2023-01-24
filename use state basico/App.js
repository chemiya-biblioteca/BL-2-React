import { useState } from "react";

function App() {

  function generarAleatorio() {
    const v = Math.trunc(Math.random() * 10);//genero aleatorio y se lo asigno
    setNumero(v)
  }

  const [numero, setNumero] = useState(0);//creo la variabkle

  return (
    <div>
      <p>Número aleatorio: {numero}</p>{/**muestro el numero */}
      <button onClick={generarAleatorio}>Generar número aleatorio</button>{/**click del boton */}
    </div>
  );
}

export default App;