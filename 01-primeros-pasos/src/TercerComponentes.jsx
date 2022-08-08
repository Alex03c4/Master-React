//racf
import React from 'react'
import PropTypes from 'prop-types';

export const TercerComponentes = (props) => {
  console.log(props);
    return (
    <div>
        <h1>Comunicasion entre componentes</h1>
        <ul>
            <li>nombre: {props.nombre}</li>
            <li>Apellido: {props.apellido}</li>
            <li>Estado: {props.ficha.estado}</li>
            <li>Grupo: {props.ficha.grupo}</li>
        </ul>
    </div>
  )
}


TercerComponentes.propTypes={
    nombre:PropTypes.string.isRequired,
    apellido:PropTypes.string,
    ficha:PropTypes.object
}
TercerComponentes.defaultProps = {
    nombre: 'Juan',
    apellido: 'Martines'
}