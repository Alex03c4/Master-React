/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { Acerca } from "../components/Acerca";
import { Articulo } from "../components/Articulo";
import { Contacto } from "../components/Contacto";
import { Inicio } from "../components/Inicio";
import { Login } from "../components/Login";
import { PruebaContext } from "../context/PruebaContext";

export const AppRouter = () => {
  const { usuario, setUsuario } = useContext(PruebaContext);

  return (
    <BrowserRouter>
      <header className="header">
        <nav>
          <div className="logo">
            <h2>React Context</h2>
          </div>
          <ul>
            <li>
              <NavLink to="/inicio">Inicio</NavLink>
            </li>

            <li>
              <NavLink to="/articulos">"Articulos"</NavLink>
            </li>

            <li>
              <NavLink to="/acerca-de">"Acerca de"</NavLink>
            </li>

            <li>
              <NavLink to="/contaccto">"Contacto"</NavLink>
            </li>

            {usuario.hasOwnProperty("nick") && usuario.nick !== null ? (
              <>
              <li>
                <NavLink to="/login">{usuario.nick}</NavLink>
              </li>

              <li>
                <a href="#" onClick={ e => {
                  e.preventDefault();
                  setUsuario({});
                }}>Cerrar sesion</a>
              </li>
              </>
            ) : (
              <li>
                <NavLink to="/login">"Login"</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <section className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulo />} />
          <Route path="/acerca-de" element={<Acerca />} />
          <Route path="/contaccto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            component={
              <div>
                <h1>404</h1>
              </div>
            }
          />
        </Routes>
      </section>
    </BrowserRouter>
  );
};
