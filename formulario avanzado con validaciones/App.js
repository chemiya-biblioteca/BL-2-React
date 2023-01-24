
import "./App.css";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
//npm install react-hook-form@7.38.0

export default function App() {
  const [successMsg, setSuccessMsg] = useState("");//creo la variable que tengo que controlar
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();//creo el formulario con los campos

  const onSubmit = (data) => {//me llegan los datos
    console.log(data);
    setSuccessMsg("User registration is successful.");//asigno el mensaje a la variable
    reset();//llamo metodo de reset del formulario
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>{/**cuando lo subas, llamma metodo onsubmit definido */}
        {successMsg && <p className="success-msg">{successMsg}</p>}
        <div className="form-control">
          <label>Username</label>
          {/**es reqierido, si no esta pongo mensaje. guardo el nombre que me ponga */}
          <input
            type="text"
            {...register("username", {
              required: "Username is required."
            })}
          />
          {/**si hay errrores pongo el mensaje de error */}
          {errors.username && (
            <p className="errorMsg">{errors.username.message}</p>
          )}
        </div>
        <div className="form-control">
          <label>Email</label>
          {/**es requerido, si no esta pongo mensaje, tiene que cumplir patron. guardo el email con register */}
          <input
            type="text"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid."
              }
            })}
          />
          {/**si hay errrores pongo el mensaje de error */}
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label>Password</label>
          {/**es requerida y hay que validar longotud y patron. la guardo con register */}
          <input
            type="password"
            {...register("password", {
              required: true,
              validate: {
                checkLength: (value) => value.length >= 6,
                matchPattern: (value) =>
                  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    value
                  )
              }
            })}
          />
          {/**si hay errores de required,checklength... */}
          {errors.password?.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password?.type === "checkLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
          {errors.password?.type === "matchPattern" && (
            <p className="errorMsg">
              Password should contain at least one uppercase letter, lowercase
              letter, digit, and special symbol.
            </p>
          )}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}