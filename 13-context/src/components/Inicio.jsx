import React from 'react'
import { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {
  const {usuario, setUsuario} = useContext(PruebaContext);
    
  return (
    <div>     
      <h1>Inicio</h1>
      <p>Pagina Inicio</p> 
      <p>Valor Compartido: <strong>{usuario.nombre}  web: {usuario.web}</strong></p>     
    </div>
  )
}
