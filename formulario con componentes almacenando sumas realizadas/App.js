import ListadoResultados from "./ListadoResultados";
import FormularioNumeros from "./FormularioNumeros";
import { useState } from "react";

function App() {

  const [operaciones, setOperacion] = useState([])//creo la variable que tengo que controlar

  function sumar(event) {//evento para manejar que recibe argumento
    event.preventDefault();
    const v1 = parseInt(event.target.valor1.value, 10)//convierto los valores
    const v2 = parseInt(event.target.valor2.value, 10)
    const suma = v1 + v2
    const nuevo = {
      resultado: suma,
      valor1: v1,
      valor2: v2
    }
    setOperacion([nuevo, ...operaciones])//guardo el nuevo pero mantengo los anteriores
    event.target.valor1.value = ''
    event.target.valor2.value = ''//reinicio los campos
  }

  return (
    <div>
      <FormularioNumeros onSumar={sumar} />{/**creo el componente y le paso propiedad */}
      <ListadoResultados resultados={operaciones} />
    </div>
  );
}

export default App;