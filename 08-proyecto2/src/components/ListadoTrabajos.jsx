import React from 'react'
import { trabajos } from './data/trabajos'
import {Link} from 'react-router-dom';
export const ListadoTrabajos = () => {
  return (
    <div>
              <section className='works'>
      {
        trabajos.map(trabajo => (        
          <article key={trabajo.id} className="work-item">
            <div className='mask'>
              <img src={"/images/img01.jpg"} alt="hola" />
            </div>
            <span>{trabajo.categorias}</span>
            <h2><Link to={"/proyecto/"+trabajo.id}> {trabajo.nombre}</Link></h2>
            <h3>{trabajo.tecnologias}</h3>
            
          </article>
        ))
      }
      </section>
    </div>
  )
}
