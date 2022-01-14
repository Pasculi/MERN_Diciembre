import React from 'react';

const Formulario = (props) => {
    const { inputs, setInputs } = (props);

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setInputs({
            ...inputs, [e.target.name]: e.target.value
        });
    };
    return (
        <div>
            <h1>Formulario</h1>
            <form className="row">
                <div className="col-md-3">
                    <label htmlFor="nombre">Nombre</label>
                    <input placeholder="Ingrese Nombre"
                        className="form-control"
                        type="text"
                        name="nombre"
                        onChange={handleInputChange}>
                    </input>
                </div>
                <div className="col-md-3">
                    <label htmlFor="apellido">Apellido</label>
                    <input placeholder="Ingrese Apellido"
                        className="form-control"
                        type="text"
                        name="apellido"
                        onChange={handleInputChange}>
                    </input>
                    <div className="col-md-3">
                        <label htmlFor="email">Email</label>
                        <input placeholder="Ingrese correo"
                            className="form-control"
                            type="text"
                            name="email"
                            onChange={handleInputChange}>
                        </input>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="password" >Password</label>
                        <input placeholder="Contraseña"
                            className="form-control"
                            type="password"
                            name="password"
                            onChange={handleInputChange}>
                        </input>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="confirmarpassword">Confirmar Password</label>
                        <input placeholder="Confirmar Contraseña"
                            className="form-control"
                            type="password"
                            name="confirmarpassword"
                            onChange={handleInputChange}>
                        </input>
                    </div>
                </div>
                <div className="col-md-3"><br />
                    <button class="btn btn-success" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
};
export default Formulario;