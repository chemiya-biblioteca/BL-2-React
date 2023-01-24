import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
//npm install react-hook-form@7.38.0

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();//creo el formulario

  const onSubmit = (data) => {//muestro los datos cuando se suba
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>{/**cuando se suba llamo al evento */}
        <div className="form-control">
          <label>Email</label>
          {/**guardo el email con register, requerido y patron */}
          <input
            type="text"
            name="email"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            })}
          />
          {/**muestro error segun el mensaje */}
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
        </div>
        <div className="form-control">
          <label>Password</label>
          {/**guardo la contraseña con register, requerida y longitud */}
          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,
              minLength: 6
            })}
          />
          {/**muestro error segun el campo que no cumnpla de la contraselña */}
          {errors.password && errors.password.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}