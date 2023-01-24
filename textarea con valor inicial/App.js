import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
 
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );//creo la variable con valor inicial

  const handleChange = (event) => {
    console.log(event.target.value)
    setTextarea(event.target.value)//al cambiar doy el nuevo valor
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )//enlazo con la variable y al cambiar llamo al evnto
}

export default App;
