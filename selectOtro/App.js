import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
 
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    console.log(event.target.value)
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

export default App;
