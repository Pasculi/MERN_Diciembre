import React from 'react';

const VerLogin = (props) => {
    const { usuario, setUsuario } = props;

    return (
        <div>
            <p>{usuario.nombre}</p>
            <p>{usuario.password}</p>
            <p>{usuario.confirmarPassword}</p>
        </div>
    );
};

export default VerLogin;
