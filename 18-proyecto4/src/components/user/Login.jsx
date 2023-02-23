import React, { useState } from 'react'
import { Global } from '../../helpers/Global'
import useAuth from '../../hooks/useAuth'
import { useForm } from '../../hooks/useForm'

export const Login = () => {
  
  const {compartido} = useAuth()  
  console.log(compartido);

  const {form, changed} = useForm({})
  const [saved, setSaved] =useState("not_sended")

  const {setAuth}= useAuth()

  const loginUser = async(e) => {
    e.preventDefault()
    //console.log(form)

    // Datos de Formulario
    let userTologin = form

    // Petición al backend
    const request = await fetch(Global.url + 'user/login',{
      method: 'POST',
      body: JSON.stringify(userTologin),
      headers: {
        "Content-Type": "application/json"
      }
    })

    // Datos de la repuesta del backend
    const data = await request.json()

    // Persistir los datos en el navegador
    //console.log(data);

    if (data.status === "success") {
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
      setSaved("login")

      // set datas en el auth
      setAuth(data.user)

      // Redirection
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    }else 
    setSaved("error")
    }

  return (
    <>
        <header className="content__header content__header--public">
                <h1 className="content__title">Login</h1>                
        </header>
        <div className="content__posts">
            
                {saved == "login" ? (
                    <strong className="alert alert-success">
                        {" "}
                        "Usuario identificado correctamente !!"
                    </strong>
                ) : (
                    ""
                )}

                {saved == "error" ? (
                    <strong className="alert alert-danger">
                        {" "}
                        "Usuario no se ha identificado  !!"{" "}
                    </strong>
                ) : (
                    ""
                )}

            <form className="form-login" onSubmit={loginUser}>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' onChange={changed} />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' onChange={changed} />
              </div>

              <input type="submit" value="Identificate" className='btn btn-success' />

            </form>
        </div>
    </>
  )
}
