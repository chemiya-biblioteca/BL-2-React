import './App.css'
import { useState } from 'react'
import { rubros } from './datos.js'//importo los datos
import { articulos } from './datos.js'


function App() {

  const [rubro, setRubro] = useState(rubros[0])//variables con valor inicial que cargo del array
  const [articulosRubro, setarticulosRubro] = useState(articulos.filter(articulo => articulo.codigorubro === rubro.codigo))//filtro solo lo del codifgo del rublro
  const [articulo, setArticulo] = useState(articulosRubro[0])

  function cambiarRubro(e) {//si cambio de rubro
    setRubro(rubros.find(rubro => rubro.codigo === Number.parseInt(e.target.value)))//buscar el que tenga mismo codigo
    const articulosrubro = articulos.filter(articulo => articulo.codigorubro === Number.parseInt(e.target.value))//buscar sus articulos con mismo codigo de rubro
    setarticulosRubro(articulosrubro)//los asigno
    setArticulo(articulosrubro[0])
  }

  function cambiarArticulo(e) {//buscas en los arituclos el que tenga el mismo codigo
    setArticulo(articulosRubro.find(articulo => articulo.codigo === Number.parseInt(e.target.value)))
  }

  return (
    <div className="formulario">
      <div>{/**al cambiar llamo la funcion, enlazo con el codifgo del rubro */}
        <select value={rubro.codigo} onChange={cambiarRubro}>
          {rubros.map(rubro => (
            <option key={rubro.codigo} value={rubro.codigo}>{rubro.nombre}</option>
          ))}
        </select>{/**por cada rubro doy una opcion y muestro sus atributos */}
      </div>
      <div>{/**al cambiar llamo la funcion, enlazo con el codifgo del articulo*/}
        <select value={articulo.codigo} onChange={cambiarArticulo}>
          {articulosRubro.map(articulo => (
            <option key={articulo.codigo} value={articulo.codigo}>{articulo.nombre}</option>
          ))}
        </select>{/**por cada articulo doy una opcion y muestro sus atributos */}
      </div>
      <div>
        <ul>{/**muestro los valores de la variables */}
          <li>Rubro:<strong>{rubro.nombre}</strong></li>
          <li>Articulo:<strong>{articulo.nombre}</strong></li>
          <li>Precio:<strong>{articulo.precio}</strong></li>
        </ul>
      </div>
    </div>
  );
}

export default App;