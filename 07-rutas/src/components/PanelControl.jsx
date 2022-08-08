import React from 'react'
import { Outlet ,NavLink } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>Paneles de Control</h1>
        <p>Elige una de esta opciones</p>

        <nav>
            <li>
               <NavLink to="/panel/inicio">Inicio</NavLink>
                
            </li>
            <li>
               <NavLink to="/panel/crear-articulos">crear articulos</NavLink>
                
            </li>
            <li>
               <NavLink to="/panel/gestion-usuarios">gestionar usuario</NavLink>
                
            </li>
            <li>
               <NavLink to="/panel/acerca-de"> acerca de  </NavLink>
                
            </li>
        </nav>

        <div>
            <Outlet/>
        </div>
    </div>
  )
}
