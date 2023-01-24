import { useState } from 'react';

function App() {
  const [numero, setNumero] = useState('')//creo el numero

  function cambioNumero(event) {//al cambiar cojo el valor
    const entrada = event.target.value;
    let cant = 0;
    for (let x = 0; x < entrada.length; x++)
      if (entrada[x] === '0' || entrada[x] === '1')//compruebo que sea 0 1
        cant++;
    if (cant === entrada.length)
      setNumero(entrada)//lo asigno
  }

  return (
    <div>
      <p>Ingrese un número binario:
        <input type="text" value={numero} onChange={cambioNumero} />
      </p>{/**enlazo con el numero y al cambiar llamo la funcion */}
    </div>
  );
}

export default App;