import { useState } from "react";

function App() {

  function eliminarUltimaFila() {
    if (articulos.length > 0) {
      const temp=Array.from(articulos)
      temp.pop()
      setArticulos(temp)
    }
  }

  const [articulos, setArticulos] = useState([{
    codigo: 1,
    descripcion: 'papas',
    precio: 12.52
  }, {
    codigo: 2,
    descripcion: 'naranjas',
    precio: 21
  }, {
    codigo: 3,
    descripcion: 'peras',
    precio: 18.20
  }]);

  return (
    <div>
      <table border="1">
        <thead><tr><th>Código</th><th>Descripción</th><th>Precio</th></tr></thead>
        <tbody>
          {articulos.map(art => {
            return (
              <tr key={art.codigo}>
                <td>
                  {art.codigo}
                </td>
                <td>
                  {art.descripcion}
                </td>
                <td>
                  {art.precio}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button onClick={eliminarUltimaFila}>Eliminar última fila</button>
    </div>
  );
}

export default App;