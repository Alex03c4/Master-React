import React from 'react'
import { useId } from 'react'

export const MiComponente = () => {

  const id = useId();
  const Segundo_id = useId();
  return (
    <div>
        <h1>useID</h1>
        <h2>Mi Id: {id}</h2>
        <h2>Mi segundo Id: {Segundo_id}</h2>
    </div>
  )
}
