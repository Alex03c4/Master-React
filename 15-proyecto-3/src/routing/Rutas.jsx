import React from 'react';
import {Routes, Route, NavLink,  BrowserRouter, Navigate}   from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { Nav } from '../components/layout/Nav';
import { Sidebar } from '../components/layout/Sidebar';
import { Articulos } from '../components/pages/Articulos';
import { Crear } from '../components/pages/Crear';
import { Inicios } from '../components/pages/Inicios';

export const Rutas = () => {
  return (
    <BrowserRouter>
        {/**Layout */}
        <Header />
        <Nav />
        {/** Contenido central y rutas  */}
        <section>
            <Routes>
                <Route path='/' element={<Inicios />}/>
                <Route path='/inicio' element={<Inicios />}/>
                <Route path='/articulos' element={<Articulos />}/>
                <Route path='/crear-articulos' element={<Crear />}/>                
            </Routes>
        </section>
        <Sidebar />
        <Footer />

    </BrowserRouter>
  );
}
