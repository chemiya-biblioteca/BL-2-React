import { useState } from 'react';

function App() {
  const [estudios, setEstudios] = useState('primario')//creo variable con valor inicial

  function cambioEstudios(e) {
    setEstudios(e.target.value)//le doy el valor a la variable que recibe el evento
  }

  return (
    <div>
      <p><input type="radio" value="primario" checked={estudios === 'primario'}
        onChange={cambioEstudios} />Primario</p>{/**cuando cambie llamo la funcion y lo ponemos marcado segun lo que haya */}
      <p><input type="radio" value="secundario" checked={estudios === 'secundario'}
        onChange={cambioEstudios} />Secundario</p>
      <p><input type="radio" value="universitario" checked={estudios === 'universitario'}
        onChange={cambioEstudios} />Universitario</p>
      <p>Estudio seleccionado: {estudios}</p>
    </div>
  );
}

export default App;