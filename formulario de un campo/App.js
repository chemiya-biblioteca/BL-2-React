import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
 
  const [name, setName] = useState("");//creo la variable que tengo que controlar

  const handleSubmit = (event) => {//cuando lo envio, muestro el nombre
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>{/**cuando lo envie, llamo este evento */}
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>{/**enlazo con la variable, y cuando cambie, le pongo el nuevo valor */}
      <input type="submit" />
    </form>
  )
 
}

export default App;
