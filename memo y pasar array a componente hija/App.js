import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todos from "./Todos";





export default function App() {
  const [count, setCount] = useState(0);//creo variables y doy estado inicial
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {//asigno el valor anterior mas 1
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />{/**le paso al componente la variable */}
      <div>
        Count: {count}
        <button onClick={increment}>+</button>{/**al click llamo la funcion */}
      </div>
    </>
  );
}
