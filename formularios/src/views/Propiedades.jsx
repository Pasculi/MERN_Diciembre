import React from 'react'

const Propiedades = (props) => {
    return (
        <div>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano
                    ?
                    "Verdadero"
                    :
                    "Falso"}</li>
                    <li>{props.arreglo.join(", ")}</li>
                    <li>Nombre: {props.objeto.nombre } {props.objeto.apellido} {props.objeto.email}</li>
            </ul>
        </div>
    )
}

export default Propiedades
