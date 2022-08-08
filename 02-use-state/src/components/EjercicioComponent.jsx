import React from 'react'
import { useState } from 'react'
import { PropTypes } from 'prop-types';
export const EjercicioComponent = ({year}) => {

  const [newYear, setYear] = useState(year);

  const Siguiente = e => {
      setYear(newYear+1);
  }

  const Anterior = e => {
    let operacion = newYear -1;
    setYear(operacion);
  }

  const cambiarYera = e=>{
    let dato = parseInt(e.target.value);
    if (Number.isInteger(dato)) {
      setYear(dato);
    } else{
      setYear(year);
    }
  }

  return (
    <div>
        <strong className='label label-green'>
            {newYear}
        </strong>
        <p>
            <button onClick={Siguiente}>Siguiente</button>
            &nbsp;
            <button onClick={Anterior}>Anterior</button>
        </p>
        <p>
          cambiar Año
          <input  
                  onChange={cambiarYera}
                  type="text"
                  placeholder='Cambia el año' 

          />
        </p>
    </div>
  )
}

EjercicioComponent.prototype = {
  year: PropTypes.number.isRequired
}
