import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export const PrivateLayout = () => {
  return (
    <>
        {/*Layout */}


        {/* Cabecera y navegación */}
        <Header />

        {/*Contenido principal */}

        <section className='layout-content'>
            <Outlet />
        </section>

        {/* Barra lateral */}
        <Sidebar />
    </>
  )
}
