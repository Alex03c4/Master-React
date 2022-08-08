//rafc
import React from 'react'

export const SegundoComponente = () => {


  const libros=["Harry Potter","Juego de Tronos","Clean Code"];

  return (
    <div className='segundo-componente'>
      <h1>Listado de libro</h1>
      {libros.length >= 1 ? (
        <ul>
          {
            libros.map((libros,indice)=>{
              return <li key={indice}>{libros}</li>;
            })
          }
        </ul> 
      )
      : (
        <p>No hay libros</p>
      )
      }
    </div>
  )
}
