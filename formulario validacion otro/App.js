import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";



class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.state = {
      values: {
        name: '',
        email: '',
        gender: '',
      },
      validations: {
        name: '',
        email: '',
        gender: '',
      },
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    })
  }

  validateAll = () => {
    const { name, email, gender } = this.state.values
    const validations = { name: '', email: '', gender: '' }
    let isValid = true

    if (!name) {
      validations.name = 'Name is required'
      isValid = false
    }

    if ((name && name.length < 3) || name.length > 50) {
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

    if (!isValid) {
      this.setState({ validations })
    }

    return isValid
  }

  validateOne = (e) => {
    const { name } = e.target
    const value = this.state.values[name]
    let message = ''

    if (!value) {
      message = `${name} is required`
    }

    if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
      message = 'Name must contain between 3 and 50 characters'
    }

    if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      message = 'Email format must be as example@mail.com'
    }

    this.setState({
      validations: {
        ...this.state.validations,
        [name]: message,
      },
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const isValid = this.validateAll()

    if (!isValid) {
      return false
    }

    const values = JSON.stringify(this.state.values)
    alert(values)
  }

  render() {
    const { name, email, gender } = this.state.values
    const { name: nameVal, email: emailVal, gender: genderVal } = this.state.validations

    return (
      <div>
        <h1>Simple form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                onBlur={this.validateOne}
              />
            </label>
            <div>{nameVal}</div>
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
              />
            </label>
            <div>{emailVal}</div>
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
              />
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
            <div>{genderVal}</div>
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