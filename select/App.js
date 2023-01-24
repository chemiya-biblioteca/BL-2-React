import {useState} from 'react';

function App() {
  const [dia,setDia]=useState('Lunes')//creo variable

  function cambioDia(e) {
    setDia(e.target.value)//al cambiar asigno nuevo valor
  }

  return (
    <div>
      <p><select value={dia} onChange={cambioDia}>{/**enlazo con la variable, llamo la funcion al cambiar */}
      <option>Lunes</option>
      <option>Martes</option>
      <option>Miércoles</option>
      <option>Jueves</option>
      <option>Viernes</option>
      <option>Sábado</option>
      <option>Domingo</option>
      </select></p>
      <p>Día seleccionado:{dia}</p>{/**enlazo con la variable */}
    </div>
  );
}

export default App;