//racf
import React from 'react'

export const EventosComponente = () => {

  const hasDadoClick = (e, nombre) => {
    alert('Has dado Click: ' + nombre);
  };

  function hasDadoDobleClick(e){
    alert('Has dado Doble Click: ' + e);
  };

  const hasEntrado = (e, accion) => {
    alert('Has '+ accion + 'a la caja');
  };

  const estasDentro = e =>{
    console.log('estas dentro');
  };

  const estasFuera = e =>{
    console.log('esta fuera');
  }
  
  
  return (
    <div>
      <p>
        {/**Eventos Click*/}
        <button onClick={e => hasDadoClick(e,'Naudis Garcia')}>Dame Click</button>
      </p>
      <p>
         {/**Eventos doble Click*/}
         <button onDoubleClick={e => hasDadoDobleClick()}>Dame Doble Click</button>
      </p>
      <div id="caja"
            onMouseEnter={e =>hasEntrado(e,'entrado')}
            onMouseLeave={e=>hasEntrado(e,'Salido')}>
        pasa por encima!!
        {/**Eventos onMauseEnterb onMauseLeave */}
      </div>
      <p>
        <input type="text" 
        onFocus={ estasDentro } 
        onBlur={ estasFuera } 
        placeholder='Introduce tu nombre'/>
      </p>

    </div>
  )
}
