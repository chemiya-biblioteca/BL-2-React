import './App.css';


function App() {
  const buscadores = ['http://www.google.com',
    'http://www.bing.com',
    'http://www.yahoo.com'];//creo variable
  return (
    <div>
      <a href={buscadores[0]}>Google</a><br />{/**pongo cada elemnto del array */}
      <a href={buscadores[1]}>Bing</a><br />
      <a href={buscadores[2]}>Yahoo</a><br />
    </div>
  );
}

export default App;