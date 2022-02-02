/* import React, { useEffect } from 'react'; */
import ToDoTable from '../components/ToDoTable';



const ToDoList = (props) => {

    /* const { list } = props; */

    /* useEffect(() => {
        console.log(list);
    }, [list]); */

    /* const statusChange = (e, index) => {
        const newTodoList = list.map((l, i) => {
            if (i === index) {
                l = { ...l, status: e.target.value === 'true' ? true : false }
            }
            return l;
        });
        setTodoList(newTodoList);
    } */

    return (
        <div className='todoListContainer' >
            <div className='tableContainer'>
                <br />
                <br />
                <h1>Lista de Tareas Pendientes</h1>
                <ToDoTable />
                {/* <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Prioridad</th>
                            <th>Status</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.length > 0 && list.map((
                            item, index) => !item.status && (
                                <tr key={index}>
                                    <th>{item.title}</th>
                                    <th>{item.description}</th>
                                    <th>{item.priority}</th>
                                    <th>{item.status ? 'Terminada' : 'Pendiente'}</th>

                                    <th>
                                        <Form.Select name='status' value={item.status} onChange={(e) => statusChange(e, index)} >
                                            <option value={false}>Pendiente</option>
                                            <option value={true}>Terminada</option>
                                        </Form.Select><br />
                                    </th>
                                </tr>
                            ))}

                    </tbody>
                </Table> */}
            </div>
            <div className='tableContainer'>
                <br />
                <br />
                <h1>Lista de Tareas Terminadas</h1>
                <ToDoTable />
                {/* <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Prioridad</th>
                            <th>Status</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.length > 0 && list.map((
                            item, index) => item.status && (
                                <tr key={index}>
                                    <th>{item.title}</th>
                                    <th>{item.description}</th>
                                    <th>{item.priority}</th>
                                    <th>{item.status ? 'Terminada' : 'Pendiente'}</th>
                                    <th>
                                        <Form.Select name='status' value={item.status} onChange={(e) => statusChange(e, index)} >
                                            <option value={false}>Pendiente</option>
                                            <option value={true}>Terminada</option>
                                        </Form.Select><br />
                                    </th>
                                </tr>
                            ))}

                    </tbody>
                </Table> */}
            </div>
        </div>
    );
};

export default ToDoList;
