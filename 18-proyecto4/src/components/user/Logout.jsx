import React, { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
export const Logout = () => {
  const {setAuth, setCounters} = useAuth()
  const navigate = useNavigate()
  

  useEffect(()=>{
    // Vaciar el Localstorage
    localStorage.clear()

    // Setear estados globales a vacio 
    setAuth({})
    setCounters({})

    // redirection al login
    navigate('/login')
  })

  return (
    <div>Logout</div>
  )
}
