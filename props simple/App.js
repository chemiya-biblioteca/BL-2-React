import logo from './logo.svg';
import './App.css';

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function App() {
 
    return (
      <div>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" />
      </div>
    );
 
}

export default App;
