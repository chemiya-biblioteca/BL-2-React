import logo from './logo.svg';
import './App.css';

function Car(props) {//recibo argumento y muestro la marca
  return <li>I am a { props.brand }</li>;
}

function App() {
 
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];//lista de elementos
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );//recoror el array con la key y pansando la marca
 
}

export default App;
