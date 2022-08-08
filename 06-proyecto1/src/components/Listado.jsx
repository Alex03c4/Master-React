import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({listadoState, setListadoState}) => {

  //const [ListadoState, setListadoState] = useState([]);
  const [editar, setEditar] = useState(0);
  
  useEffect(() => {
    //console.log('Componente de listado de pelicula Cargado');
    coseguirPeliculas();
  }, [])
  
  const coseguirPeliculas = () =>{
    let peliculas = JSON.parse(localStorage.getItem('pelis'));
    setListadoState(peliculas);

    return peliculas;
  }

  const borrarPeli = (id) =>{
    // Conseguir peliculas almacenadas
      let pelis_almacenadas = coseguirPeliculas();

    // filtrar esas peliculas para que elimine de array la que no quiero
      let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
      
    // actualizar estado del Listado
      setListadoState(nuevo_array_pelis);

    // Actualizar los datos en el Local Storage
      localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));
  }


  return (
    <>
      {listadoState != null ? 
          listadoState.map(peli => {
          return (
          <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>

            <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
            <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>

            {/**Aparece el formulario de editar */}
            {editar === peli.id && (
              <Editar peli={peli} 
                      coseguirPeliculas = {coseguirPeliculas}
                      setEditar={setEditar}
                      setListadoState={setListadoState}
              />  
            )}

          </article>  
          )  
        })
      : <h2>No hay pelicula para mostra</h2>
    }
      
      
    </>
  );
};
