import React from 'react'
import { NavLink } from 'react-router-dom'
export const Nav = () => {
  return (
    <nav className="nav">
    <ul>
        <li><NavLink to="/inicio" href="#">Inicio</NavLink></li>
        <li><NavLink to="/articulos" href="#">Artuculos</NavLink></li>
        <li><NavLink to="/crear-articulos" href="#">Crear Articulos</NavLink></li>
        <li><NavLink to="/" href="#">Contacto</NavLink></li>
    </ul>
</nav>
  )
}
