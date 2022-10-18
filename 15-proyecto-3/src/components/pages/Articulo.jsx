import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { Listado } from "./Listado";

export const Articulo = () => {
  const [articulo, setArticulo] = useState({});
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, []);

  const conseguirArticulo = async () => {
    const { datos, cargando } = await Peticion(
      Global.url + "articulo/" + params.id,
      "GET"
    );

    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }
    setCargando(false);
    console.log(articulo);
  };

  return (
    <div className="jumbo">
      <>
        {cargando ? (
          "Cargando..."
        ) : (
          <>
            <div className="mascara">
              {articulo.imagen != "default.png" && (
                <img
                  src={Global.url + "imagen/" + articulo.imagen}
                  alt="React"
                />
              )}
              {articulo.imagen == "default.png" && (
                <img
                  src="https://cdn.pixabay.com/photo/2022/08/30/08/04/brain-7420599_1280.png"
                  alt="React"
                />
              )}
            </div>
            <h1>{articulo.titulo}</h1>
            <span>{articulo.fecha}</span>
            <p>{articulo.contenido}</p>
          </>
        )}
      </>
    </div>
  );
};
