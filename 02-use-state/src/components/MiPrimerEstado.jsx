//rafc
import React, { useState } from 'react'

export const MiPrimerEstado = () => {
  
  const [nombre, setNombre] = useState('Naudis');

  const cambiarNombre = (e,nombreFijo) => {
    setNombre(nombreFijo);
  }
    return (
   <div>
        <h3>Mi primer estado</h3>
        <strong className='label'>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={e => cambiarNombre(e, 'Pepe')}>Cambiar</button>
        &nbsp;
        <input type="text" onKeyUp={e=> cambiarNombre(e, e.target.value)} placeholder='Cambia nombre' />
   </div>
  )
}
