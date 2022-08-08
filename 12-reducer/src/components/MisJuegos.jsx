import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { JuegosReducer } from "../reducers/JuegosReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("juegos")) || [];
};
export const MisJuegos = () => {
  const [juegos, dispatch] = useReducer(JuegosReducer, [], init);

  useEffect(() => {
    localStorage.setItem("juegos", JSON.stringify(juegos));
  }, [juegos]);

  const conseguirDatos = (e) => {
    e.preventDefault();

    let juego = {
      id: new Date().getTime(),
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
    };

    const accion = {
      type: "crear",
      payload: juego,
    };

    dispatch(accion);
    console.log(juegos);

    const borramelo = id => {
      const action = {
        type: "borrar",
        payload: id,
      };
      dispatch(accion);
    };

	

  };

  return (
    <div>
      <h1>Esto son mi videojuegos </h1>
      <p>numero de videojuegos: {juegos.length}</p>
      <ul>
        {juegos.map((juego) => (
          <li key={juego.id}>
            {juego.titulo}
            &nbsp; <button>X</button>
          </li>
        ))}
      </ul>

      <h3>Agregar Juegos</h3>

      <form onSubmit={conseguirDatos}>
        <input type="text" name="titulo" placeholder="Titulo" />
        <textarea name="descripcion" placeholder="Descripcion"></textarea>
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};
