import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
 
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    console.log(event.target.value)
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

export default App;
