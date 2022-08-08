import React from 'react'

export const Editar = ({peli, coseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = 'editar pelicula';

    const guardarEdicion = (e, id)  => {
        e.preventDefault();
        
        // Conseguir el target del evento
        let target = e.target;

        // Buscar el indice del objeto de la película a actualizar
        const pelis_almacenadas = coseguirPeliculas();
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        let peli_actualizada = {        
          id,
          titulo: target.titulo.value,
          descripcion: target.descripcion.value
        };

        // Actualiar el elemento con ese indice
        pelis_almacenadas[indice] = peli_actualizada;
        

        // Guardar el nuevo array de objetos en el localStorage

        localStorage.setItem('pelis',JSON.stringify(pelis_almacenadas));

        //y actualizamos estado

        setListadoState(pelis_almacenadas);
        setEditar(0); 


    }
  return (
    <div className='edit_form'>
        <h3 className='title'> { titulo_componente } </h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input type="text"
                    name='titulo'
                    className='titulo_editado'       
                    defaultValue={peli.titulo}
            />

            <textarea 
                    name="descripcion"
                    defaultValue={peli.descripcion}
                    className='description_editada'
            />

            <input type="submit" className='editar' value='Actualizar' />
        </form>
    </div>
  )
}
