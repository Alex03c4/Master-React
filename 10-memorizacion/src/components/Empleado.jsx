import React from 'react'

export const Empleado =React.memo(() => {
  console.log('Se ha vuelto a renderizar Empleado'); 
  return (
    <div>Empleado</div>
  )
});
