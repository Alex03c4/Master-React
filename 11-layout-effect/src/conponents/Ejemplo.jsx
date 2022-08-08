
import React, {useLayoutEffect} from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const Ejemplo = () => {
  const [mostrar, setMostrar] = useState(false);

  const caja =useRef();
   useLayoutEffect(()=>{
    console.log("useLayoutEffect: Componente cargado!!!");  
    {
      /**
       * 
       * let caja = document.querySelector("#caja");
       * caja.innerHTML ="Hola Mundo"
       *console.log(caja.getBoundingClientRect());
       */
    }
   },[]);  

   useEffect(()=>{
    console.log("useEffect: Componente Cargado!!!");

   },[mostrar]);
  return (
    <div>
      <h1>Ejemplo useEffect y useLayoutEffect</h1>

      <button onClick={() => setMostrar(prev =>{
        console.log(!prev);
        return !prev;
      })}>Mostrar mensaje</button>

      {
        mostrar && (
          <div id="caja" ref={caja}>
            Hola, Soy un mensaje {mostrar}
          </div>
        )
      }
      
    </div>
  )
}
