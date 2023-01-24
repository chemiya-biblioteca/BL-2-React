import { memo } from "react";

const Todos = ({ todos }) => {//recibo argumento
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );//los recorro con la clave y el contenido
};

export default memo(Todos);