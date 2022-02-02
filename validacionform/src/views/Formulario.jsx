import React from 'react'

const Formulario = (props) => {
    const { msg } = props.msg;
    return (
        <div>
            <h1>{ msg }</h1>
        </div>
    )
}

export default Formulario
