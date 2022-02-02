import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CharacterList = () => {
    const [list, setList] = useState([]);

    const getAllCharacters = async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character/');
        console.log("🚀 ~ file: CharacterList.jsx ~ line 9 ~ getAllCharacters ~ response", response)
        setList(response.data.results);

    }
    useEffect(() => {
        getAllCharacters()
    }, []);

    return (
        <div>
            <h1>Lista de Personajes de Rick and Morty</h1>
            <Link to={"https://rickandmortyapi.com/api/character/?page=3"}>
                <button>
                    Ir a la primera página
                </button>
            </Link>
            <ul>
                {list?.map(character => (
                    <li className='card' key={character.id}>
                        <Link to={`/personaje/${character.id}`}>
                            <img src={character.image} alt={character.name} />
                        </Link>

                        <p className='card-name'>Nombre: {character.name}</p>
                        <p className='card-estado'>Estado: {character.status}</p>
                        <p className='card-especie'>Especie: {character.species}</p>
                    </li>

                ))}
            </ul>

        </div>
    );
}
export default CharacterList;
