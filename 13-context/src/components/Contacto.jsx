import React from 'react'
import { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'
export const Contacto = () => {
  const compartida = useContext(PruebaContext);
  
  console.log(compartida);
  return (
    
    <div>
      <h1>Contacto</h1>
      <p>Pagina Contacto</p>     
    </div>
  )
}
