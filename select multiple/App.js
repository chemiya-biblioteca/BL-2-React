import {useState} from 'react';

function App() {
  const [dias,setDias]=useState(['Lunes','Miércoles'])//variable con los dias

  function cambioDias(e) {
    const opciones = e.target.options//coges las opciones
    const seleccionadas = []
    for (let i = 0; i < opciones.length; i++) {
      if (opciones[i].selected) {
        seleccionadas.push(opciones[i].value)//guardas cada seleccion
      }      
    }    
    setDias(seleccionadas)//actualizas variable
  }

  return (
    <div>{/**enlazas con la variable y evento para el cambio */}
      <p><select multiple value={dias} onChange={cambioDias}>
      <option>Lunes</option>
      <option>Martes</option>
      <option>Miércoles</option>
      <option>Jueves</option>
      <option>Viernes</option>
      <option>Sábado</option>
      <option>Domingo</option>{/**muestras cada uno seleccionado del arrauy */}
      </select></p>
      Días seleccionados:{dias.map((dia)=>{
          return (<p>{dia}</p>)
        }
        )}
    </div>
  );
}

export default App;