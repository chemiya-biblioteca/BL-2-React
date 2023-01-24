import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./App.css";
//npm install react-bootstrap --save

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();//creo el formulario

  const onSubmit = (data) => {
    console.log(data);//cuando subas muestras los datos
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>{/**para manejar el envo llamas a la funcion */}
        <Form.Group className="mb-3" controlId="email">{/**creas un form group */}
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Please enter a valid email"
              }
            })}
          />{/**registras el email, requerido y patron */}
          {/**muestras los errores de email */}
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="gender">
          <Form.Label>Select Gender</Form.Label>
          <Form.Check
            type="radio"
            label="Male"
            value="male"
            {...register("gender", {
              required: "Please select your gender"
            })}
          />
          <Form.Check
            type="radio"
            label="Female"
            value="female"
            {...register("gender")}
          />{/**registras el genero, requerido */}
          {/**muestras los errores de genero */}
          {errors.gender && <p className="errorMsg">{errors.gender.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="skills">
          <Form.Label>Select Your Skills</Form.Label>
          <Form.Check
            type="checkbox"
            label="JavaScript"
            value="JavaScript"
            {...register("skills", {
              required: "Please select at-least one skill"
            })}
          />
          <Form.Check
            type="checkbox"
            label="React"
            value="react"
            {...register("skills")}
          />
          <Form.Check
            type="checkbox"
            label="Node.js"
            value="nodejs"
            {...register("skills")}
          />
          <Form.Check
            type="checkbox"
            label="Angular"
            value="angular"
            {...register("skills")}
          />{/**registras la tecnologia, requerido*/}
          {/**muestras los errores de skills */}
          {errors.skills && <p className="errorMsg">{errors.skills.message}</p>}
        </Form.Group>
        <label></label>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}
