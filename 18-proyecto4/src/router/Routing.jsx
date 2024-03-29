import React from 'react'
import {Routes, Route, NavLink,  BrowserRouter, Navigate, Link} from 'react-router-dom';
import { Followers } from '../components/follow/Followers';
import { Following } from '../components/follow/Following';
import { PrivateLayout } from '../components/layout/private/PrivateLayout';
import { PublicLayout } from '../components/layout/public/PublicLayout';
import { Freed } from '../components/publication/Freed';
import { Config } from '../components/user/Config';
import { Login } from '../components/user/Login';
import { Logout } from '../components/user/Logout';
import { People } from '../components/user/People';
import { Profile } from '../components/user/Profile';
import { Register } from '../components/user/Register';
import { AuthProvider } from '../context/AuthProvider';
export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
          <Routes>
              <Route path="/" element={ <PublicLayout/> }>
                  <Route index element={ <Login /> }/>
                  <Route path="login" element={ <Login /> }/>
                  <Route path="registro" element={ <Register /> }/>
              </Route>

              <Route path='/social' element={<PrivateLayout />}>
                <Route index element={<Freed />}/>
                <Route path='feed' element={<Freed />}/>
                <Route path='logout' element={<Logout />}/>
                <Route path='gente' element={<People />}/>
                <Route path='ajustes' element={<Config />}/>
                <Route path='siguiendo/:userId' element={<Following />}/>
                <Route path='seguidores/:userId' element={<Followers />}/>
                <Route path='perfil/:userId' element={<Profile />}/>
                
              </Route>

              <Route path='*' element={
                <>
                  <p>
                    <h1>Error 404</h1>
                    <Link to="/">Volver al inicio</Link>
                  </p>
                </>
              }/>

          </Routes>
        </AuthProvider>
    </BrowserRouter>
  )
}

/**
 * @param {<AuthProvider/>} Comparte la información en todo el sistemas 
 */
