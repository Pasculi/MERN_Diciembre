import React from 'react'
import { useParams } from 'react-router-dom';

const VistaDos = (props) => {

    const {nombre}=useParams();

    return (
        <div>
            <h1>Vista 2! {nombre}</h1>
        </div>
    )
}

export default VistaDos
