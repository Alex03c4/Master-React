import React from 'react'
import {Link} from 'react-router-dom';
export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Lorem <strong>Naudis Garcia</strong> amet consectetur <strong>Programador y Desarroyador</strong>. Repellendus aut ratione provident 
      </h1>

      <h2>
        Lorem ipsum dolor sit <Link to="/contacto"> Contacta Conmigo</Link>
      </h2>

      <section className="lasts-works">
        <h2 className='heading'>Algunos de mi proyectos</h2>
        <p>Esto son algunos de mis trabajos de desarrolla web.</p>

        <div className="works">

        </div>
      </section>
    </div>
  )
}
