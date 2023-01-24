import {useState} from 'react'
import espana from './imagenes/espana.png';
import uk from './imagenes/uk.png';


function App() {
  const banderas = [espana,uk];//constantes con nombres de arriba de las imagenes importados
  const [nroBandera, setNroBandera] = useState(0)//variable con los numeros

  function banderaSiguiente() {//evento del boton, miro el numero de la bandera y lo actualizo
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
      <p><img src={banderas[nroBandera]} alt="espana" /></p>{/**cojo del array de banderas el numero que sea */}
      <p>
        <input type="button" value="<" onClick={banderaPrevia} />{/**llamo al evento al hacer click */}
        <input type="button" value=">" onClick={banderaSiguiente} />
      </p>
    </div>
  );
}

export default App;