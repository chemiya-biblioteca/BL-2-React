import logo from './logo.svg';
import './App.css';

import { useState, createContext, useContext } from "react";

const UserContext = createContext();//creo el contexto

function Component1() {
  const [user, setUser] = useState("Jesse Hall");//creo la variable

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />{/**llamo al segundo y uso el contexto con la variable */}
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );//llamo siguiente
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );//llamo siguiente
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );//llamo siguiente
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );//llamo siguiente
}

function App() {
  const user = useContext(UserContext);//uso el conteto

  return (
    <div className="App">
      <Component1/>
    </div>
  );//llamo al primer compoennte
}

export default App;