import './App.css';

function retornarAleatorio() {//creo funcion
  return Math.trunc(Math.random() * 10);
}

function App() {
  const siglo = 21//constantes
  const persona = {
    nombre: 'Juan',
    edad: 34
  }
  return (
    <div>
      <h1>Título nivel 1</h1>
      <hr />
      <p>Estamos en el siglo {siglo}</p>{/**muestro el valor de la constante */}
      <h3>Acceso a un objeto</h3>
      <p>{persona.nombre} tiene {persona.edad} años</p>{/**muestro los atributos de la constante */}
      <h3>Llamada a un método</h3>
      <p>Un valor aleatorio llamando a un método.</p>
      {retornarAleatorio()}{/**llamo a la funcion */}
      <h3>Calculo inmediato de expresiones</h3>
      3 + 3 = {3 + 3}
    </div>
  );
}

export default App;