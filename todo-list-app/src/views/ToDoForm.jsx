import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const ToDoForm = (props) => {
    const { todoList, setTodoList } = props;
    const [todoForm, setTodoForm] = useState({
        title: '',
        description: '',
        priority: '',
        status: false
    })

    useEffect(() => {
        console.log(todoForm);
    }, [todoForm]);


    const handleOnChange = (e) => {
        console.log({ [e.target.name]: e.target.value })
        setTodoForm({
            ...todoForm,
            [e.target.name]: e.target.value
        });
    }

    const newTodo = (e) => {
        e.preventDefault();
        console.log(todoForm);
        setTodoList([...todoList, todoForm]);
    }

    return (

        <div>
            <Form onSubmit={newTodo} className='card-container' >
                <h1>Ingresar nueva tarea:</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tìtulo</Form.Label>
                    <Form.Control type="text" placeholder="Titulo" name='title' value={todoForm.title} onChange={handleOnChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Descripción" name='description' value={todoForm.description} onChange={handleOnChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select name='priority' value={todoForm.priority} onChange={handleOnChange} >
                        <option value=''>Seleccione una prioridad</option>
                        <option value={'Alta'} >Alta</option>
                        <option value={'Media'}>Media</option>
                        <option value={'Baja'}>Baja</option>
                    </Form.Select><br />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>
        </div>
    );
};

export default ToDoForm;
