import React, { useEffect } from 'react'
import { useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {
  const [usuario, setUsuario] = useState('Naudis Garcia');
  const [fecha, setFecha] = useState('01-01-1994');
  const [contador, setContador]= useState('0');
  
  const modoUsuario = e =>{
    setUsuario(e.target.value);
  }

  const cambiarFecha = e =>{
    setFecha(Date.now());
  } 
  // solo se ejecuta una vez, solo al cargar el componentes
  useEffect(() =>{
    console.log('Has Cargado el componentes ');
  }, []);
  
  // se ejecuta solo si cambia,os el usuario
  useEffect(() =>{
    setContador(parseInt (contador+1));
    console.log('Has cambiado el Usuario ' + contador);
  }, [usuario]);
  return (
    <div>
        <h1>El efecto - Hook UseEffect</h1>
        <strong className= {contador >= 10 ? 'label label-green' : 'label'}>
          {usuario}
        </strong>
        <strong>
          {fecha}
        </strong>
        <p>
          <input  type="text" 
                  onChange={modoUsuario}  
                  placeholder='Cambia el nombre'
            />
          <button onClick={cambiarFecha}>Cambiar fecha</button>
        </p>

        {usuario == 'Naudis' && <AvisoComponent/>}
    </div>
  )
}
