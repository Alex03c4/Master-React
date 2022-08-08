import React, { useState } from 'react'
import { useEffect } from 'react';

export const Empleado2 = React.memo( ({pagina, mensaje}) => {
  
  const conseguirEmpleado = async(p) => {
    const url = "https://reqres.in/api/users?page="+p;
    const peticion = await fetch(url);
    const {data: empleados} = await peticion.json();

    setEmpleados(empleados);
  }

  const [empleados, setEmpleados] = useState([]);
  useEffect(() => {
    conseguirEmpleado(pagina);
  }, [pagina]);

  
  useEffect(()=>{
    console.log('Se ha vuelto a renderizar Empleado'); 
    mensaje();        
  },[pagina]);



  return (
    <div>
			<p>mostrando la pagina {pagina} </p>
        <ul>
          {empleados.map(empleado => {
              return <li key={empleado.id}>{empleado.first_name}  {empleado.last_name}</li>
            })}
        </ul>
    </div>
  )
})
