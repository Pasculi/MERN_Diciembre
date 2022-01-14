import React from 'react'

const Resultado = (props) => {
    
    const {nombre, apellido, email, password, confirmarpassword} = props.data;
    return(
        <div className="result">
            <h1>Datos de Formulario</h1>
            <p>Nombre: <span>{nombre}</span></p>
            <p>Apellido: <span>{apellido}</span></p>
            <p>Email: <span>{email}</span></p>
            <p>Password: <span>{password}</span></p>
            <p>Confirmar Password: <span>{confirmarpassword}</span></p>
        </div>
    )
}

export default Resultado
