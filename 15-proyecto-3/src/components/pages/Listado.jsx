import React from 'react'
import { Global } from '../../helpers/Global';
export const Listado = ({articulos, setArticulos}) => {
  return (
    articulos.map((articulo) => {

        return (
          <article key={articulo._id} className="articulo-item">
            <div className="mascara">              
              
              {articulo.imagen != "default.png" &&              
                <img
                  src={Global.url+"imagen/"+articulo.imagen}
                  alt="React"
                />
              }
              {articulo.imagen == "default.png" &&  
                <img
                  src="https://cdn.pixabay.com/photo/2022/08/30/08/04/brain-7420599_1280.png"
                  alt="React"
                />
              }
            </div>
            <div className="datos">
              <h3 className="title">{articulo.titulo}</h3>
              <p className="description">{articulo.contenido}</p>

              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
            </div>
          </article>
        );
      })
  )
}
