import React from "react";

export const Articulos = () => {
  return (
    <>
      <article className="articulo-item">
        <div className="mascara">
          <img
            src="https://cdn.pixabay.com/photo/2022/08/30/08/04/brain-7420599_1280.png"
            alt="React"
          />
        </div>
        <div className="datos">
          <h3 className="title">Desarrollo web</h3>
          <p className="description">victorroblesweb.es</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </div>
      </article>
    </>
  );
};
