import './Dado.css'

function Dado(props) {//recibo argumento y muestro el valor que me llega en el argumento
    return (
        <div className="dado-recuadro">{props.valor}</div>
    );
}

export default Dado