import { useState, useEffect } from 'react';

function App() {

  const [articulos, setArticulos] = useState([])//variable al inicio

  useEffect(() => {//hago peticion api
    fetch('https://scratchya.com.ar/react/datos.php')
      .then((response) => {
        return response.json()
      })
      .then((articulos) => {//lo asigno a los articulos
        setArticulos(articulos)
      })
  }, [])

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map(art => {
            return (
              <tr key={art.codigo}>
                <td>{art.codigo}</td>
                <td>{art.descripcion}</td>
                <td>{art.precio}</td>
              </tr>
            );
          })}
        </tbody>{/**recorro el array y muestro su atributo por cada uno */}
      </table>
    </div>
  );
}

export default App