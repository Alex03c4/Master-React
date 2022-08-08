import React from 'react'
import { useState } from 'react';

export const PrimerComponente = () => {
  
  const Cursos = [
    'html',
    'css',
    'js',
    'svg',
    'png',
  ];

  const [nombre, setNombre] = useState('naudis');
  const cambiarNombre = (newNombre) =>{
      setNombre(newNombre);
  }
  return (
   <div>
      <h1>Mi primer componente</h1>
      <p>Mi nombre es { nombre }</p>
      <input type="text" onChange={e => cambiarNombre(e.target.value)} />
      <button onClick={e => cambiarNombre('Naudis Garcia')}>Cambiar</button>
      
      <h2>Mis Curso</h2>
        <ul>
          {
            Cursos.map((cur, i) => {
              return (<li key={i}>{ cur }</li>);
            })
          }
        </ul>
   </div>
  )
}
