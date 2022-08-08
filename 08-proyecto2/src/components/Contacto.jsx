import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
    <h1 className='heading'>Servicios</h1>

    <form className='contact' action='NaudisGarca@gmail.com'>
      <input type="text" placeholder='Nombre' />
      <input type="text" placeholder='Apellido' />
      <input type="Email" placeholder='Email' />
      <textarea placeholder='Motivo de contacto' />

      <input type="submit" value="enviar" />
      

    </form>
  </div>
  )
}
