import React, { useState  } from 'react'
import { GuardarEsStorage } from '../helpers/GuardarEsStorage';


export const Crear = ({setListadoState}) => {
  const TituloComponente = 'Añadir películas';

  const [peliState, setPeliState] = useState ({
    titulo: '',
    descripcion: ''
  })

  const { titulo, descripcion} = peliState; 

  const conseguirDatosForm = e => {
    e.preventDefault();
    // Conseguir datos del formulario

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
    
    // Crear objeto de la peliculas a Guardar
    let peli = {
      id : new Date().getTime(),
      titulo,
      descripcion,       
    }
    // Guardar estado
    setPeliState(peli); 

    //Actualizar el estado de listado principal
    setListadoState(elementos => {
      return [...elementos, peli];
    });

    // Guardar en el almacenamiento Local 
    GuardarEsStorage('pelis',peli);
  };


  


  return (
    <div className="add">
      <h3 className="title"> {TituloComponente} </h3>

      <strong>
        {(titulo && descripcion)&& 'Has creado la pelicula: '  + titulo}
      </strong>
      <form onSubmit={conseguirDatosForm}>
        <input 
              type="text"
              id="titulo"
              name='titulo' 
              placeholder="Titulo" 
        />
        <textarea 
              id="description" 
              name='descripcion'
              placeholder="Descripción">

        </textarea>
        <input 
            type="submit" 
            id="save" 
            value="Guardar" 
        />
      </form>
    </div>
  )
}
