import { useState } from 'react'
import { Articulos } from './components/pages/Articulos'
import { Crear } from './components/pages/Crear'
import { Inicios } from './components/pages/Inicios'

function App() {
  return(
    <div>
      <h1>Blog con React</h1> 
      <Inicios />
      <Articulos /> 
      <Crear />    
    </div>
  )
}

export default App
