import './App.css';

function mostrarTitulo(tit) {//recibo el argumento y lo muestro
  return (<h1>
    {tit}
  </h1>);
}

function App() {//llamo la funcion con el argumento
  return (
    <div>
      {mostrarTitulo('Hola Mundo')}
      {mostrarTitulo('Fin')}
    </div>
  );
}

export default App;