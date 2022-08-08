import React, { useMemo, useState } from 'react'

export const Tarea = () => {

  const [tareas, setTareas] = useState([]);
  const [contador, setContador] = useState(360);

	const guardarTareas = e => {
		e.preventDefault();

		let tareas_actualizadas = [...tareas, e.target.description.value];
		setTareas(tareas_actualizadas);
		console.log(tareas);
	}

	const borrarTarea = id => {
		//filtrar las tareas para borras la que no quiero
		let Nuevas_tareas = tareas.filter( (tarea, indice) => indice !== id );

		//setTareas, guardar el nuevo listado de tareas en el estado
		setTareas(Nuevas_tareas);
	}

	const sumarAlContador = e => {
		setContador(contador +1);
	}

	const contadoresPasados = (acumulacion) => {
		for(let i = 0 ; i <= acumulacion; i++){
			console.log("Ejecutando acumulacion de contadores del pasado...");
		}
		return `Contador manual de tareas: ${acumulacion}`;
	}

	const memoContador = useMemo(() => contadoresPasados(contador), [contador])

  return (
    <div className='tareas-container'>
        <h1>Mis Tareas</h1>
        <form onSubmit={guardarTareas}>
            <input type="text" name='description' placeholder='Describe la tareas' />
            <input type="submit" value="Guardar" />
        </form>
				<h3>{memoContador}</h3>
				<button onClick={sumarAlContador} >sumar</button>
        <hr />
        <h3>Lista de tareas</h3>
				{
					tareas.map((tarea, indice) => {
						return(
							<li key={indice}>
								{tarea}
								&nbsp;
								<button onClick={ ()=> borrarTarea(indice)} >x</button>
							</li>
						)
					})
				}
    </div>
  )
}
