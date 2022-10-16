import React from 'react';
import { useState } from 'react';
import {useForm} from "../../hooks/useForm";
import {Peticion} from "../../helpers/Peticion"
import {Global} from "../../helpers/Global"

export const Crear = () => {

  const { formulario, enviado, cambiado } = useForm();
  const [resultado, setResultado] = useState("no_enviado");

  const guardarArticulo = async (e) => {
    e.preventDefault();

    //Recoger datos formulario
    let nuevoArticulo = formulario;

    // Guardar artículos en el backend
    const {datos} = await Peticion(Global.url+"crear", "POST", nuevoArticulo);
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
      <h1>Crear Articulo</h1>
      <p>Formulario para crear un articulo</p>
      <pre>{JSON.stringify(formulario)}</pre>
       

      <strong>{resultado == "guardado"? "Articulo Guardado con exito!!" : ""}</strong>
      <strong>{resultado == "error"? "Los datos proporcionados son incorrectos!!" : ""}</strong>
      {/*Montar Formulario*/}
      <form className='formulario' onSubmit={guardarArticulo}>

        <div className='form-group'>
          <label htmlFor='titulo'>Titulo</label>
          <input type="text" name="titulo" onChange={cambiado}/>
        </div>

        <div className='form-group'>
          <label htmlFor='contenido'>Contenido</label>
          <textarea type="text" name="contenido" onChange={cambiado}  />
        </div>

        <div className='form-group'>
          <label htmlFor='file0'>Imagen</label>
          <input type="file" name="file0" id='file'  /> 
        </div>


        <input type="submit" value="Guardar" className='btn btn-success'  />
      </form>

    </div>
  )
}
