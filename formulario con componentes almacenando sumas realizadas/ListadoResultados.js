function ListadoResultados(props) {//recibo argumento
    return (
      <ul>
        {props.resultados.map((elemento) => 
          <li>La suma de {elemento.valor1} y {elemento.valor2} es {elemento.resultado}</li>
        )}
      </ul>
    );//muestro de cada elemento del argumento sus valores
  }
  
  export default ListadoResultados;