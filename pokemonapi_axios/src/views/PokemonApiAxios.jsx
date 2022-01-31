import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

const PokemonApiAxios = () => {
    const [pokemon, setPokemon] = useState([]); // array of pokemon objects

    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then((response) => setPokemon(response.data.results))
            
            }

    return (
        <div>
            <h1>Pokemon Api Axios</h1>
            <Button  color="success" onClick={getPokemon}>Pekemons con AXIOS</Button>
            <ul>
                {pokemon.map((item, index) => (
                    <li key={index}>
                        <h2>Nombre: {item.name}</h2>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={item.name} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default PokemonApiAxios;