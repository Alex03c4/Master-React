import React from 'react';
import {Routes, Route, NavLink,  BrowserRouter, Navigate} from 'react-router-dom';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error';
import { Inicio } from '../components/Inicio';
import { InicioPanle } from '../components/panel/Inicio';
import { Gestion } from '../components/panel/Gestion';
import { Acerca } from '../components/panel/Acerca';
import { PanelControl } from '../components/PanelControl';
import { Persona } from '../components/Persona';
import { Crear } from '../components/panel/Crear';


export const Routerprincipal = () => {
  return (
    /**cargar componentes */
    /**Aquí se carga el componentes que coincide con el path */
    
    <BrowserRouter>
      <h1>Cabecera</h1>
      <hr />

      <nav>
        <li>
          <NavLink 
                  to='/inicio'
                  className={({isActive}) => (isActive ? 'activado' : '')}     
          >Inicio</NavLink>          
        </li>
        <li>
          <NavLink 
                  to='/articulos'
                  className={({isActive}) => (isActive ? 'activado' : '')} 
          >Articulo</NavLink>          
        </li>
        <li>
          <NavLink 
                  to='/contacto'
                  className={({isActive}) => (isActive ? 'activado' : '')} 
          >Contacto</NavLink>          
        </li>
        <li>
          <NavLink 
                  to='/persona'
                  className={({isActive}) => (isActive ? 'activado' : '')} 
          >Persona</NavLink>          
        </li>
        <li>
          <NavLink 
                  to='/panel'
                  className={({isActive}) => (isActive ? 'activado' : '')} 
          >Panel</NavLink>          
        </li>
      </nav>

      <section>
        <Routes>
            <Route path="/" element={ <Inicio/> } />
            <Route path="/inicio" element={ <Inicio/> } />
            <Route path="/articulos" element={ <Articulos/> } />
            <Route path="/contacto" element={ <Contacto/> } />
            <Route path="/persona/:nombre/:apellido" element={ <Persona/> } />
            <Route path="/persona/:nombre/" element={ <Persona/> } />
            <Route path="/persona/" element={ <Persona/> } />
            <Route path="/redirigir/" element={<Navigate to="/persona/Vilma/Salos"/>  } />
            <Route path="/panel/*" element={<PanelControl/>} >
              <Route path="inicio" element={ <InicioPanle/> } />
              <Route path="crear-articulos" element={ <Crear/> } />
              <Route path="gestion-usuarios" element={<Gestion/> } />
              <Route path="acerca-de" element={<Acerca/>} />
            </Route>
            <Route path="*" element={<Error/>} />  
          </Routes>
      </section>
    </BrowserRouter>
  )
}
