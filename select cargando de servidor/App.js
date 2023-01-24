import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [rubros, setRubros] = useState([])//variables iniciales
  const [rubroSeleccionado, setRubroSeleccionado] = useState({})

  useEffect(() => {
    fetch('https://www.scratchya.com.ar/reactya/proyecto021/recuperarrubros.php')
      .then((response) => {
        return response.json()
      })
      .then((rub) => {
        setRubros(rub)
        setRubroSeleccionado(rub[0])
      })
  }, [])//al iniciar cargo los datosy los pongo en las variables 

  const [articulosRubro, setarticulosRubro] = useState([])//variables
  const [articuloSeleccionado, setArticuloSeleccionado] = useState([])

  useEffect(() => {
    if (rubroSeleccionado.codigo)
      fetch('https://www.scratchya.com.ar/reactya/proyecto021/recuperararticulos.php?rubro=' + rubroSeleccionado.codigo)
        .then((response) => {
          return response.json()
        })
        .then((art) => {
          setarticulosRubro(art)
          setArticuloSeleccionado(art[0])
        })
  }, [rubroSeleccionado])//al cargar si selecciono uno mando peticion para traer sus datos y los guardo
  //cada vez que se actualice el rubro seleccionado tienes que llamar a esto



  function cambiarRubro(e) {//buscar uno en el array que su codigo sea iguala el del evento que llega
    const rubroSelect = rubros.find(r => Number.parseInt(r.codigo) === Number.parseInt(e.target.value))
    setRubroSeleccionado(rubroSelect)
  }

  function cambiarArticulo(e) {//buscar uno en el array que su codigo sea iguala el del evento que llega
    setArticuloSeleccionado(articulosRubro.find(articulo => Number.parseInt(articulo.codigo) === Number.parseInt(e.target.value)))
  }

  return (
    <div className="formulario">
      <div>{/**enlazo con el codigo del rubro seleccionado, al cambiar llamo metodo , cada opcion del array */}
        <select value={rubroSeleccionado.codigo} onChange={cambiarRubro}>
          {rubros.map(rubro => (
            <option key={rubro.codigo} value={rubro.codigo}>{rubro.nombre}</option>
          ))}
        </select>
      </div>
      <div>{/**enlazo con el codigo del articulo seleccionado, al cambiar llamo metodo , cada opcion del array */}
        <select value={articuloSeleccionado.codigo} onChange={cambiarArticulo}>
          {articulosRubro.map(articulo => (
            <option key={articulo.codigo} value={articulo.codigo}>{articulo.nombre}</option>
          ))}
        </select>
      </div>
      <div>
        <ul>{/**enlazo con los seleccionados */}
          <li>Rubro:<strong>{rubroSeleccionado.nombre}</strong></li>
          <li>Articulo:<strong>{articuloSeleccionado.nombre}</strong></li>
          <li>Precio:<strong>{articuloSeleccionado.precio}</strong></li>
        </ul>
      </div>
    </div>
  );
}

export default App;