import { useState } from 'react';

function App() {

  const [datos, setDatos] = useState({
    nombre: '',
    edad: '',
    estudios: false
  })//creo la variable que tengo que controlar

  function cambioNombre(e) {//cambio en el input, recibes argumento
    setDatos((valores) => ({
      ...valores,//cogemos los mismos valores de antes que estaban almacenados
      nombre: e.target.value,//excepto el nombre que lo actualizo por el que me llega
    }))
  }

  function cambioEdad(e) {
    setDatos((valores) => ({
      ...valores,
      edad: e.target.value,
    }))
  }

  function cambioEstudio(e) {
    setDatos((valores) => ({
      ...valores,
      estudios: !datos.estudios,
    }))
  }

  function procesar(e) {//proceso el formulario
    e.preventDefault();//la accion predeterminada no ocurre
    alert('Dato cargado ' + datos.nombre + ' ' //muestro los datos
      +datos.edad + ' ' 
      +datos.estudios);
  }

  return (
    <div>
      <form onSubmit={procesar}>{/**cuando se suba, llamo ese evento */}
        <p>Ingrese nombre:<input type="text" value={datos.nombre} onChange={cambioNombre} /></p>
        <p>Ingrese edad:<input type="number" value={datos.edad} onChange={cambioEdad} /></p>
        <p>Estudios:<input type="checkbox" value={datos.estudios} onChange={cambioEstudio} /></p>
        <p><input type="submit" /></p>{/**enlazo con el atrubuto del objeto y metodos cuando se cambien */}
      </form>
      <hr />
      <h3>Datos Ingresados</h3>
      <p>Nombre:{datos.nombre}</p>
      <p>Edad:{datos.edad}</p>{/**enlazo con las variables */}
      <p>Estudios:{datos.estudios ? 'con estudios' : 'sin estudios'}</p>{/**si true pones estudios */}
    </div>
  );
}

export default App;