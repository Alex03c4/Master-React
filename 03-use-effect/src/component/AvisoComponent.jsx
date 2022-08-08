import React, { useEffect} from 'react'

export const AvisoComponent = () => {

  useEffect(()=>{
    //cuando se monta el componentes
    alert('El componentes esta montado');

    //cuando el componentes se desmonta
    return() => {
      alert('componentes desmontado')
    }
  },[]) // se ejecuta una vez porque le paso el array vació
  
  return (
    <div>
        <hr />
        <h3>Saludo Naudis</h3>
        <button onClick={
            e => {
                alert('Bienvenido');
            }
        }>Mostrar Alerta</button>
    </div>
  )
}
