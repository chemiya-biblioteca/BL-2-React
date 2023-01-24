import logo from './logo.svg';
import './App.css';

function Car(props) {
  return <h2>I am a { props.brand.model }!</h2>;//muestro los datos de lo que recibo
}

function App() {
 
  const carInfo = { name: "Ford", model: "Mustang" };//creo la constante
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carInfo } />{/**creo el componente y le paso el valor */}
    </>
  );
 
}

export default App;
