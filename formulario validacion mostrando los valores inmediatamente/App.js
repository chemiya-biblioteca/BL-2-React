import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";



class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.state = {//creas el estado
      values: {
        name: '',
        email: '',
        gender: '',
      },
      validations: {//creas las validaciones
        name: '',
        email: '',
        gender: '',
      },
    }
  }

  handleChange = (e) => {//cuando haya cambio
    const { name, value } = e.target//recibes que ha cambiado y su nuevo contenido
    this.setState({
      values: {//actualizas el estado, con los anteriores y cambiando el nuevo
        ...this.state.values,
        [name]: value,
      },
    })
  }

  validateAll = () => {
    const { name, email, gender } = this.state.values//coges los valores del estado
    const validations = { name: '', email: '', gender: '' }//validaciones vacias
    let isValid = true

    if (!name) {//si no hay nombre, añades ha validaciones
      validations.name = 'Name is required'
      isValid = false
    }

    if ((name && name.length < 3) || name.length > 50) {// si no cumple, añades a nombre el error
      validations.name = 'Name must contain between 3 and 50 characters'
      isValid = false
    }

    if (!email) {
      validations.email = 'Email is required'
      isValid = false
    }

    if (email && !/\S+@\S+\.\S+/.test(email)) {
      validations.email = 'Email format must be as example@mail.com'
      isValid = false
    }

    if (!gender) {
      validations.gender = 'Gender is required'
      isValid = false
    }

    if (!isValid) {//asignas las validaciones al estado
      this.setState({ validations })
    }

    return isValid//retornas el bool
  }

  validateOne = (e) => {
    const { name } = e.target//recibes el valor
    const value = this.state.values[name]//buscas del estado el valor
    let message = ''

    if (!value) {//si no hay valor
      message = `${name} is required`
    }

    if (value && name === 'name' && (value.length < 3 || value.length > 50)) {//si el que traes no mide
      message = 'Name must contain between 3 and 50 characters'
    }

    if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      message = 'Email format must be as example@mail.com'
    }

    this.setState({//le asignas con lo que tenias antes , actualizando el nuevo de las validaciones
      validations: {
        ...this.state.validations,
        [name]: message,
      },
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const isValid = this.validateAll()//llamas al metodo para validar

    if (!isValid) {
      return false//si no es valido paras
    }

    const values = JSON.stringify(this.state.values)//si no lo conviertes en json
    alert(values)
  }

  render() {
    const { name, email, gender } = this.state.values//coges los calores del state
    const { name: nameVal, email: emailVal, gender: genderVal } = this.state.validations//coges las validaciones

    return (
      <div>
        <h1>Simple form</h1>
        <form onSubmit={this.handleSubmit}>{/**cuando se suba llamas al metodo */}
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                onBlur={this.validateOne}
              />{/**enlazas con el nombre, cuando un cambio llamas a la funcion, onblur es cuando cambias a otro input */}
            </label>
            <div>{nameVal}</div>{/**pones el error que haya */}
          </div>

          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                onBlur={this.validateOne}
              />{/**enlazas con el email, en un cambio llamas a la funcion y al dejar el input onblur */}
            </label>
            <div>{emailVal}</div>{/*pones el error que haya */}
          </div>

          <div>
            <label>
              Female
              <input
                type="radio"
                name="gender"
                value="F"
                onChange={this.handleChange}
                onBlur={this.validateOne}
              />{/**en un cambio actualizad contenido y cuando dejas el input comprobacion */}
            </label>
            <label>
              Male
              <input
                type="radio"
                name="gender"
                value="M"
                onChange={this.handleChange}
                onBlur={this.validateOne}
              />
            </label>
            <div>{genderVal}</div>{/**error asociado */}
          </div>

          <button type="submit">Send</button>
        </form>

        <div>
          <h2>Values of the form</h2>
          <p>{JSON.stringify(this.state)}</p>
        </div>
      </div>
    )
  }
}

export default function App() {
  

  return (
    <div className="App">
      <Form/>
    </div>
  );
}