import React from 'react'
import { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const Formulario = () => {
  
  const {formulario, enviado, cambiado} = useForm({});
	
  return (
    <div>
        <h1>Formulario</h1>
        <p>Formulario para guardar Curso</p>
        <p>Curso guardados: {formulario.titulo}</p>
				<pre className='codigo'>{JSON.stringify(formulario)}</pre>

        <form onSubmit={enviado} className='mi-formulario'>
            <input type="text" name='titulo' onChange={cambiado} placeholder='Titulo'/>
            <input type="number" name='anio' onChange={cambiado} placeholder='Año publicado'/>
            <textarea name='description' onChange={cambiado} placeholder='Description'/>
            <input type="text" name='autor' onChange={cambiado} placeholder='Autor'/>
            <input type="email" name='email' onChange={cambiado} placeholder='email'/>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}
