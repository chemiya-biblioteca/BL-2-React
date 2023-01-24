import logo from './logo.svg';
import './App.css';

function Car(props) {
  return <h2>I am a { props.brand.model }!</h2>;
}

function App() {
 
  const shoot = (a) => {//la funcion que maneja el evento reicbe un argumento
    alert(a);
  }
//en ele vento, paso un argumento
  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
 
}

export default App;
