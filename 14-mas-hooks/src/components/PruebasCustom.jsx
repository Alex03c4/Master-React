import React from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebasCustom = () => {
  const {estado, mayusculas, minusculas, add}  = useMayus("NAUDIS")
  return (
    <div>
        <h1>Probando componente personalizados</h1>
				<h2>{estado}</h2>
				
				<button className='button' onClick={mayusculas}>Poner en mayuscula</button>
				<button className='button' onClick={minusculas}>Poner en minuscula</button>
				<button className='button' onClick={e => add("- Probando Hooks Personalizados")}>contatenar</button>
				<br />
    </div>
  )
}
