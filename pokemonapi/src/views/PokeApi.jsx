import React, { useState, useEffect } from 'react';

const PokeApi = () => {
    const [pokemon, setPokemon] = useState([]); // array of pokemon objects
    const onClick= () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then((response) => {
                console.log('RESPONSE 1', response.result)
                return response.json()
            })
            .then((response) => {
                console.log('RESPONSE 2', response.result)
                const data = response.results
                setPokemon(data)
            }).catch((error) => console.log(error))
}
return (
    <div>
        <h1>PokeApi</h1>
        <button onClick={onClick}>FETCH POKEMONS</button>
        <ul>
            {console.log(pokemon)}
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

export default PokeApi
