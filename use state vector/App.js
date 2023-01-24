import { useState } from "react";

function App() {

  function generarAleatorios() {
    const vec = new Array(5)
    for (let x = 0; x < vec.length; x++)
      vec[x] = Math.trunc(Math.random() * 10)
    setNumeros(vec)//genero aleatorios y lo guardo en el vector
  }

  const [numeros, setNumeros] = useState([0, 0, 0, 0, 0]);//creo variable

  return (
    <div>
      <p>Números aleatorios:</p>{/**muestro cada aleatorio del vector */}
      {numeros.map(num => (<p>{num}</p>))}
      <button onClick={generarAleatorios}>Generar números aleatorios</button>{/**llamo al evento click del boton */}
    </div>
  );
}

export default App;