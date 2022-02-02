import React, { useEffect, useState } from 'react';
import axios from 'axios';


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [errorCallApi, setErrorCallApi] = useState('');

    const getUsersFromApy = async () => {

        try {
            const responseApi = await axios.get('https://dummyapi.io/data/v1/user?limit=20' , {
                headers: {
                    'app-id': '61f98fdab4e07e377cea3c5d'
                }
            } )
            console.log("🚀 ~ file: UserList.jsx ~ line 15 ~ getUsersFromApy ~ data", responseApi.data.data)
            setUsers(responseApi.data.data);

        } catch (err) {
            console.log("🚀 ~ file: UserList.jsx ~ line 18 ~ getUsersFromApy ~ err", err.response.data.error)
            setErrorCallApi(err.response.data.error);

        }
    }
    useEffect(() => {
        getUsersFromApy();
    }, []);

    return (
        <div>
            <h1>Soy la lista</h1>
            {users.length > 0 ? users.map(user => (
                <div className='card' key={user.id}>
                    <h2>{user.title}</h2>
                    <p>{user.firstName} {user.lastName}</p>
                    <img src={user.picture} alt={user.firstName} />
                </div>
            )) : <h1>¡Ha ocurrido el siguiente error: {errorCallApi}</h1> }
        </div>
    );
};

export default UserList;
