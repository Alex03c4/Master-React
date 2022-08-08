//rsc 
//
import React from 'react';

const MiComponente = () => {
   const id = '222000685';   
   let usuario = {
    nombre: 'Naudis',
    apellido: 'Garcia',
    wed: 'NaudisGarcia.com'
   }
    return (
        <div>
            <h1>Mi primer componente</h1>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>Apellido: <strong>{usuario.apellido}</strong> </li>
                <li>wed: <strong>{usuario.wed}</strong></li>
                <li>id: <strong>{id}</strong></li>                
            </ul>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vee</li>
            </ul>
        </div>
    )
};

export default MiComponente;