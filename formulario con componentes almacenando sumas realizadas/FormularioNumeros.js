function FormularioNumeros(props) {//recibo argumento
    return (
        <form onSubmit={props.onSumar}>{/**cuando se suba llamo a la funcion que me llega */}
          <p>Ingrese primer valor:<input type="text" name="valor1" /></p>{/**pongo name para que se pueda acceder */}
          <p>Ingrese segundo valor:<input type="text" name="valor2" /></p>
          <input type="submit" value="Sumar" />
        </form>
        );
}

export default FormularioNumeros;