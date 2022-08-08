import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

    const [busqueda, setBusqueda] = useState();
    const [noEncontrado, setnoEncontrado] = useState(false);

    const buscarpeli = (e) => {
        // Crear un estado y actualizarlos
        setBusqueda(e.target.value);
                
        // Filtrar para buscar coincidences
        let pelis_encontradas = listadoState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
        });

        if(busqueda.length <= 1  || pelis_encontradas <=0) {
            pelis_encontradas = JSON.parse(localStorage.getItem('pelis'));
            setnoEncontrado(true);
        }else {
            setnoEncontrado(false);
        }

        console.log(pelis_encontradas);
        

        // Actualizar estado del listado principal con lo que Logrado filtrar
        setListadoState(pelis_encontradas);

    };
    return (
        <div className="search">
            <h3 className="title">Buscador</h3>

            {(noEncontrado == true && busqueda.length > 1) &&(
                <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
            )}
            <form>
                <input type="text"
                        name='buscador'    
                        autoComplete='off'
                        onChange={buscarpeli}
            />
                <button id="search">Buscar</button>
            </form>
        </div>
    )
}
