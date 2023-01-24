import { useState } from 'react';

function App() {
  const [texto, setTexto] = useState('')//creo la variable

  function cambioTexto(e) {
    setTexto(e.target.value)//asigno el texto al cambiar
  }

  return (
    <div>{/**enlazo con la variable y al cambiar llamo la funcion */}
      <p><textarea value={texto} onChange={cambioTexto} cols="100" rows="5"></textarea></p>
      <p>Cantidad de caracteres ingresados: {texto.length}</p>{/**pongo la longituf */}
    </div>
  );
}

export default App;