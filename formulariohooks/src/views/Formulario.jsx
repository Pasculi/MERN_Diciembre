import React, { useState } from "react";

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })
    const handleInputChange = (e) => {
        console.log(e.target.value)
        setDatos({
            ...datos, [e.target.name]: e.target.value

        })
    }
    return (
        <>
            <h1>Formulario</h1>
            <form className="row">
                <div className="col-md-3">

                    <input placeholder="Ingrese Nombre"
                        className="form-control"
                        type="text"
                        name="nombre"
                        onChange={handleInputChange}>

                    </input>
                </div>
                <div className="col-md-3">

                    <input placeholder="Ingrese Apellido"
                        className="form-control"
                        type="text"
                        name="apellido"
                        onChange={handleInputChange}>

                    </input>
                    <div className="col-md-3">

                    <input placeholder="Ingrese correo"
                        className="form-control"
                        type="text"
                        name="email"
                        onChange={handleInputChange}>

                    </input>
                    </div>
                    <div className="col-md-3">
                    <input placeholder="Contraseña"
                        className="form-control"
                        type="password"
                        name="password"
                        onChange={handleInputChange}>

                    </input>
                    </div>
                    <div className="col-md-3">
                    <input placeholder="Confirmar Contraseña"
                        className="form-control"
                        type="password"
                        name="confirmarpassword"
                        onChange={handleInputChange}>

                    </input>
                </div>

                
                </div>
                <div className="col-md-3">
                    <button class="btn btn-success" type="submit">Enviar</button>
                </div>
            </form>
            <h3>{datos.nombre}</h3>
            <h3>{datos.apellido}</h3>
            <h3>{datos.email}</h3>
            <h3>{datos.password}</h3>
            <h3>{datos.confirmarpassword}</h3>
        </>
    );
};
export default Formulario;