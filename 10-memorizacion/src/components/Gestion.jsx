import React from 'react'
import { useRef } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { Empleado } from './Empleado'
import { Empleado2 } from './Empleados2';

export const Gestion = () => {

	const [nombre, setNombre] = useState("");
  	const [pagina, setPagina] = useState(1);
	
	useEffect(()=>{
		console.log('Vista Gestion Actualizada');   
	  },[nombre,pagina]);

	const mostrarMensaje = useCallback(() => {
		console.log("Hola que tal soy un mensaje desde el componente empleado!!");
	}, [pagina]);

	const asignarGestor = e =>{
		setNombre(e.target.value);
	}
	
  return (
    <div>
        <h1>Nombre del gestor: {nombre}</h1>
				<input type="text"  onChange={asignarGestor} placeholder= "Introduzca en nombre del Gestor"/>

        <h2>Listado de empleado:</h2>
        <p>Los usuario vienen de Jsonplaceholder...</p>

				<button onClick={() => setPagina(1)}>Pagina 1</button>  
				<button onClick={() => setPagina(2)}>pagina2</button>
      	<Empleado />
				<Empleado2  pagina={pagina} mensaje = {mostrarMensaje}/>
    </div>
  )
}
