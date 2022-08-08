import { useEffect, useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routers/AppRouter';

function App() {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    console.log("use Effect una vez");
    let user = JSON.parse(localStorage.getItem("usuario"));
    // La primara vez que se carga el componentes
    setUsuario(user);
  },[])

  useEffect(() =>{
    console.log("Cambio en estado usuario");
    // cada vez que se actualice el estado usuario se guarda en el LS
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);
  const curso = {
    id: 1,
    titulo: "Master en React",
    contenido: "Muchas horas de Contenido"
  }
  return (
    <div className="App">
      <PruebaContext.Provider value={{
          usuario,
          setUsuario,
      }}>
        <AppRouter/>
      </PruebaContext.Provider>
    </div>
  );
}

export default App;
