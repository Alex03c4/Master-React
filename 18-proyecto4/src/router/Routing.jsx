import React from 'react'
import {Routes, Route, NavLink,  BrowserRouter, Navigate} from 'react-router-dom';
import { PrivateLayout } from '../components/layout/private/PrivateLayout';
import { PublicLayout } from '../components/layout/public/PublicLayout';
import { Freed } from '../components/publication/Freed';
import { Login } from '../components/user/Login';
import { Register } from '../components/user/Register';
export const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <PublicLayout/> }>
                <Route index element={ <Login /> }/>
                <Route path="login" element={ <Login /> }/>
                <Route path="registro" element={ <Register /> }/>
            </Route>

            <Route path='/social' element={<PrivateLayout />}>
              <Route index element={<Freed />}/>
              <Route path='feed' element={<Freed />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
