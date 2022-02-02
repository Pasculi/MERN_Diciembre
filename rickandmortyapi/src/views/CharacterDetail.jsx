import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const CharacterDetail = () => {

  const { id } = useParams();
  const [character, setCharacter] = useState({});

  const getOneCharacter = async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    console.log("🚀 ~ file: CharacterDetail.jsx ~ line 9 ~ getCharacter ~ response", response.data)
    setCharacter(response.data);
  }


  useEffect(() => {
    getOneCharacter();
  }, [id]);


  return (
    <div>
      <h1>Detalle {character.name}</h1>
      <ul>
        <li className='card card-detail'>
          <img src={character.image} alt={character.name} />
          <p className='card-name'>Nombre: {character.name}</p>
          <p className='card-estado'>Fecha de creación: {character.created}</p>
          <Link to='/lista-personajes'>Volver a la lista</Link>

        </li>
      </ul>
    </div>
  );
}

export default CharacterDetail;
