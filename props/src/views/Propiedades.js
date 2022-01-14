import React from 'react';

function Propiedades(props) {
 
    return (
        <div>
        <h1>{props.porDefecto}</h1>
        <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.arreglo.join(' - ')}</li>
            <li>{props.booleano ? "Es verdadero" : "Es Falso"}</li>
            <li>{props.objeto.nombre} {props.objeto.apellido} - {props.objeto.email}</li>
            <li>{props.reactElelment}</li>
            <li>{props.arreglo.map(props.funcion).join(' - ')}</li>
            <li>{props.componente}</li>

        </ul>
        </div>
    );
}
export default Propiedades;

Propiedades.defaultProps = {
    porDefecto:"Este es un valor por defecto"
}