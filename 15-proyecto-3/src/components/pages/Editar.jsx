import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import {Peticion} from "../../helpers/Peticion"
import {Global} from "../../helpers/Global"

export const Editar  = () => {

  const { formulario, enviado, cambiado } = useForm();
  const [resultado, setResultado] = useState("no_enviado");
  const [articulo, setArticulo] = useState({});
  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, []);

  const conseguirArticulo = async () => {
    const { datos } = await Peticion(
      Global.url + "articulo/" + params.id,
      "GET"
    );

    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }

  };

  const editarArticulo = async (e) => {
    e.preventDefault();

    //Recoger datos formulario
    let nuevoArticulo = formulario;

    // Guardar artículos en el backend
    const {datos} = await Peticion(Global.url+"articulo/"+params.id, "PUT", nuevoArticulo);
    if (datos.status === "success" ) {
      setResultado("guardado");
      /**
       * Revisar el video 200 para ver posible errores 
       */
      // subir Imagen
      const fileInput = document.querySelector("#file");
      
      const formData = new FormData();
      formData.append("file0", fileInput.files[0]);

      const subida = await Peticion(Global.url+"subir-imagen/"+datos.articulo._id, "POST",  formData, true);

      if (subida.datos.status == "success"){
        setResultado("guardado");
      } else{
        setResultado("error");
      }

    } 
    
  }

  return (
    <div className='jumbo'>
      <h1>Editar Articulo</h1>
      <p>Formulario para Editar: {articulo.titulo}</p>
      <pre>{JSON.stringify(formulario)}</pre>
       

      <strong>{resultado == "guardado"? "Articulo Guardado con exito!!" : ""}</strong>
      <strong>{resultado == "error"? "Los datos proporcionados son incorrectos!!" : ""}</strong>
      
      {/*Montar Formulario*/}
      <form className='formulario' onSubmit={editarArticulo}>

        <div className='form-group'>
          <label htmlFor='titulo'>Titulo</label>
          <input type="text" name="titulo" onChange={cambiado} defaultValue={articulo.titulo}/>
        </div>

        <div className='form-group'>
          <label htmlFor='contenido'>Contenido</label>
          <textarea type="text" name="contenido" onChange={cambiado} defaultValue={articulo.contenido} />
        </div>

        <div className='form-group'>
          <label htmlFor='file0'>Imagen</label>
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
          <input type="file" name="file0" id='file'  /> 
        </div>


        <input type="submit" value="Guardar" className='btn btn-success'  />
      </form>

    </div>
  )
}
