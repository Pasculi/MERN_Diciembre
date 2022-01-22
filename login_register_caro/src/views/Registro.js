import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Registro = (props) => {
    const { users, setUsers } = props;

    const [registerForm, setRegisterForm] = useState(
        {
            userName: '',
            address: '',
            email: '',
            rut: '',
            phonrNumber: '',
            password: '',
            confirmPassword: ''
        }
    )
    const [isRegisterOn, setIsRegisterOn] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const [errorPass, setErrorPass] = useState('');

    const handleOnChange = (e) => {
        console.log({ [e.target.name]: e.target.value })
        console.log(registerForm)
        setRegisterForm({ ...registerForm, [e.target.name]: e.target.value })
        //alert(JSON.stringify([e.target.name], e.target.value))
        if ((e.target.name === 'password' && e.target.value !== registerForm.confirmPassword) || (e.target.name === 'confirmPassword' && e.target.value !== registerForm.password)) {
            setErrorPass('* Las contraseñas deben coincidir.')
        } else {
            setErrorPass('')
        }

        //(e.target.name === 'password' && e.target.value !== registerForm.confirmPassword) ? setErrorPass('Las contraseñas deben coincidir') : setErrorPass('')

    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('Hice click en el botón', Object.values(registerForm).includes(''))
        //Object.values(registerForm).includes('') ? setErrorMsg('* Debe llenar todos los campos del formulario.') : setErrorMsg('');
        if (Object.values(registerForm).includes('')) {
            setErrorMsg('* Debe llenar todos los campos del formulario.')
        } else {
            setErrorMsg('');
            setUsers([...users, registerForm]);
        }
    }
    return (


        <div className='card-container'>
            {isRegisterOn ? (
                <div>
                    <h2>Formulario de Registro</h2>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre completo</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese un nombre" name='userName' value={registerForm.userName} onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese una dirección" name='address' value={registerForm.address} onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese un email" name='email' value={registerForm.email} onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Rut</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese un rut" name='rut' value={registerForm.rut} onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="text" placeholder="(Código de área) número" name='phonrNumber' value={registerForm.phonrNumber} onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="Password" name='password' value={registerForm.password} onChange={handleOnChange} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirmar password</Form.Label>
                            <Form.Control type="text" placeholder="Repetir Password" name='confirmPassword' value={registerForm.confirmPassword} onChange={handleOnChange} />
                            <p className="text-error">{errorPass}</p>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button><br />
                    </Form>
                    <p>Ya soy un usuario registrado, redireccioname al <Button variant="link" onClick={() => setIsRegisterOn(false)}>Login</Button></p>
                    <p className='text-error'>{errorMsg}</p>
                </div>
            ) : (
                <div className='card-container'>
                    <h2>Formulario Login</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese un email" name='email' value={registerForm.email} onChange={handleOnChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' value={registerForm.password} onChange={handleOnChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                    <p>Aún no soy un usuario registrado, redireccioname al  <Button variant="link" onClick={() => setIsRegisterOn(true)}>Registro</Button></p>
                </div>

            )}
        </div>




    );
};

export default Registro;
