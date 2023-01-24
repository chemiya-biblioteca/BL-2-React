import { useState, useEffect } from 'react';

function App() {

  const [texto, setTexto] = useState("")//creo variable

  useEffect(() => {document.title = texto}, [texto])//pongo de titulo de la pagina cada vez que cambie el texto

  function cambiar(e) {
    setTexto(e.target.value)//en cada cambio asigno el texto
  }

  return (
    <div>
      <p><input type="text" onChange={cambiar} /></p>
      <p>{texto}</p>{/**enlazo con la variable y en cada cambio llamo la funcion */}
    </div>
  );
}

export default App;