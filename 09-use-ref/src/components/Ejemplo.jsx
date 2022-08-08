import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

export const Ejemplo = () => {
	const [numeroSaludo, setNumeroSaludo] = useState(0);
	const saludoEnCola = useRef(numeroSaludo);
	useEffect(() =>{
		saludoEnCola.current = numeroSaludo;
		setTimeout(() => {
			console.log("Mensaje en cola " + saludoEnCola.current);
		}, 2000)
	}, [numeroSaludo])

	const enviarSaludo = e =>  {
		//console.log("Saludo enviado");
		setNumeroSaludo(numeroSaludo + 1)
	}
  return (
		
    <div>
        <h1>Ejemplo de useRef</h1>
				<h2>Saludos enviados: {numeroSaludo}</h2>
        <button onClick={enviarSaludo}>Enviar Saludo</button>
    </div>
  )
}
