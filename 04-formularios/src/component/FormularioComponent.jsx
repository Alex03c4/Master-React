import React from "react";
import { useState } from "react";

export const FormularioComponent = () => {

  const [usuario, setUsuaria] = useState({});
  const conseguirDatosFormulario = (e) => {
    e.preventDefault();
    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      bio: datos.bio.value,
      enviar: datos.enviar.value
    };

    console.log(usuario);
    setUsuaria(usuario);
  };

  const cambiarDatos = e => {
    let name_del_input = e.target.name;
    let usuario_para_modificar = usuario;

    //usuario_para_modificar[name_del_input] = e.target.value;
    //setUsuaria(usuario_para_modificar);

    setUsuaria(estado_previo => ({
        ...estado_previo,
        [name_del_input]: e.target.value
    })
    )
        
  };


  return (
    <div>
      <h1>Formulartio React</h1>
      {usuario.enviar && 
        (
          <div className="info-usuario label label-gray">
            {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su
            biografia es esta <p>{usuario.bio}</p>
          </div>
        )
      }
      <form onSubmit={conseguirDatosFormulario}>
        <input 
                onChange={cambiarDatos} 
                type="text" 
                placeholder="Nombre" 
                name="nombre" />
        <input  onChange={cambiarDatos}  
                type="text" 
                placeholder="Apellido" 
                name="apellido" />
        <select 
                onChange={cambiarDatos}  
                name="genero">
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <textarea 
                onChange={cambiarDatos}  
                placeholder="Biografia" 
                name="bio"></textarea>

        <button type="submit" value='Enviar' name="enviar">Enviar</button>
      </form>
    </div>
  );
};
