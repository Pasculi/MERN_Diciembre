import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'


const Formulario = () => {
    const [errName, setErrName] = useState('')
    const [errLastName, setErrLastName] = useState('')
    const [errEmail, setErrEmail] = useState('')
    const [errPassword, setErrPassword] = useState('')
    const [coincide, setCoincide] = useState('')

    const [user, setUser] = useState({
        userName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log({ [e.target.name]: e.target.value })
        if (e.target.name === 'userName' && e.target.value.length < 2) {
            setErrName('* El nombre debe tener al menos 2 caracteres')
        } else {
            setErrName('');
        }
        if (e.target.name === 'lastName' && e.target.value.length < 2) {
            setErrLastName('* El apellido debe tener al menos 2 caracteres')
        } else {
            setErrLastName('');
        }
        if (e.target.name === 'email' && e.target.value.length < 5) {
            setErrEmail('* El email debe tener al menos 5 caracteres')
        } else {
            setErrEmail('');
        }
        if ((e.target.name === 'confirmPassword' && e.target.value.length < 8) || (e.target.name === 'password' && e.target.value.length < 8)) {
            setErrPassword('* La password debe tener al menos 8 caracteres')

        } else {
            setErrPassword('');
        }
        if ((e.target.name === 'password' && e.target.value !== user.confirmPassword) || (e.target.name === 'confirmPassword' && e.target.value !== user.password)) {
            setCoincide('* Las contraseñas deben coincidir.');
        } else {
            setCoincide('');
        }
    }

    return (
        <div className='card-container'>
            <h1>Formulario</h1>
            <Form>
                <Form.Group className="mb-3 grupo " controlId="formBasicEmail">
                    <Form.Label className='label'>First Name</Form.Label>
                    <Form.Control className='input' type="text" placeholder="Search..." name='userName' onChange={handleOnChange} />
                </Form.Group>
                <p className='error-text'>{errName}</p>
                <Form.Group className="mb-3 grupo" controlId="formBasicEmail">
                    <Form.Label className='label'>Last Name</Form.Label>
                    <Form.Control className='input' type="text" placeholder="Search..." name='lastName' onChange={handleOnChange} />
                </Form.Group>
                <p className='error-text'>{errLastName}</p>
                <Form.Group className="mb-3 grupo" controlId="formBasicEmail">
                    <Form.Label className='label'>Email</Form.Label>
                    <Form.Control className='input' type="text" placeholder="Search..." name='email' onChange={handleOnChange} />
                </Form.Group>
                <p className='error-text'>{errEmail}</p>
                <Form.Group className="mb-3 grupo" controlId="formBasicPassword">
                    <Form.Label className='label'>Confirm Password</Form.Label>
                    <Form.Control className='input' type="text" placeholder="Search..." name='confirmPassword' onChange={handleOnChange} />
                </Form.Group>
                <p className='error-text'>{errPassword}</p>
                <p className='error-text'>{coincide}</p>
                <Form.Group className="mb-3 grupo" controlId="formBasicPassword">
                    <Form.Label className='label'>Password</Form.Label>
                    <Form.Control className='input' type="text" placeholder="Search..." name='password' onChange={handleOnChange} />
                </Form.Group>

            </Form>
        </div>
    );
};

export default Formulario;
