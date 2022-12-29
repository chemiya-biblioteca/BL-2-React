import {useState} from 'react'
import espana from './imagenes/espana.png';
import uk from './imagenes/uk.png';


function App() {
  const banderas = [espana,uk];
  const [nroBandera, setNroBandera] = useState(0)

  function banderaSiguiente() {
    if (nroBandera < banderas.length - 1) {
      setNroBandera(nroBandera + 1)
    }
  }

  function banderaPrevia() {
    if (nroBandera > 0) {
      setNroBandera(nroBandera - 1)
    }
  }

  return (
    <div>
      <h1>Banderas de paises </h1>
      <p><img src={banderas[nroBandera]} alt="espana" /></p>
      <p>
        <input type="button" value="<" onClick={banderaPrevia} />
        <input type="button" value=">" onClick={banderaSiguiente} />
      </p>
    </div>
  );
}

export default App;