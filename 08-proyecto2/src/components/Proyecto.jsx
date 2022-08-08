import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { trabajos } from './data/trabajos';
export const Proyecto = () => {
  const [proyecto , setProyecto] = useState({});
  const params = useParams();

  useEffect(()=>{
    let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
    setProyecto(proyecto[0]);
  },[])
  return (
    <div className='page page-work'>
    <div className='mask imd'>
      <img src={"/images/img01.jpg"} alt="hola" />
    </div>
    <h1 className='heading'>Proyecto: {proyecto.nombre}</h1>
    <p>{proyecto.tecnologias}</p>
    <p>{proyecto.description}</p> 
    <a href={"https://"+proyecto.url} target="_blank" rel="noreferrer" >Ir al proyecto</a>

  </div>
  )
}
