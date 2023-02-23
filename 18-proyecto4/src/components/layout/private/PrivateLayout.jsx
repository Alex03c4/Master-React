import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const PrivateLayout = () => {
  const { auth, loading } = useAuth();

  if (loading) {
    return <h1>Cargando ....</h1>;
  } else {
    return (
      <>
        {/*Layout */}

        {/* Cabecera y navegación */}
        <Header />

        {/*Contenido principal */}

        <section className="layout-content">
          {auth._id ? 
            <Outlet /> 
            : 
              <Navigate to="/login" />
          }
        </section>

        {/* Barra lateral */}
        <Sidebar />
      </>
    );
  }
};
