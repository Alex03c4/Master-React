import React, { useState } from "react";
import { useEffect } from "react";

export const AjaxComponent = () => {
  const [usuario, setUsuario] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setError] = useState(false);
  const getUsuarioEstaticos = () => {
    setUsuario([
      {
        id: 1,
        email: "michael.lawson@reqres.in",
        first_name: "Naudis",
        last_name: "Garcia",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 2,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Ary",
        last_name: "Cordero",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 3,
        email: "tobias.funke@reqres.in",
        first_name: "Pepe",
        last_name: "Garcia",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
    ]);
  };

  const getUsuarioAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((respuesta) => respuesta.json())
      .then(
        (resultadoFinal) => {
          setUsuario(resultadoFinal.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const getUsuarioAjaxAW =  () => {
    setTimeout(async()=> {
      try {
        const peticion = await fetch("https://reqres.in/api/users?page=1");
        const { data } = await peticion.json();
        setUsuario(data);
        setCargando(false);  
      } catch (error) {
        console.log(error); 
        setError(error.message);
        
      }
    }, 2000);
   
    
  };

  useEffect(() => {
    //getUsuarioEstaticos();
    //getUsuarioAjaxPms();
    getUsuarioAjaxAW();
  }, []);


  if (errores!==false) {
    return <div className="cargando">{errores}</div>;
  }else
  if (cargando === true) {
    //Cuando esta todo Cargando
    return <div className="cargando">cargando datos...</div>;
  } else
  if (cargando === false && errores === false) {
    //cuando todo esta cargado
    return (
      <div>
        <h2>Lista de usuario vias Ajax</h2>

        <ol className="usuario">
          {usuario.map((usuario) => {
            return (
              <li key={usuario.id}>
                <img src={usuario.avatar} width='20' alt="" />
                &nbsp;
                {usuario.first_name} {usuario.last_name}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
};
