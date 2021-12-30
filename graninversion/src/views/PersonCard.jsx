import React from 'react';

const PersonCard = (props) => {
    const { primerNombre, primerApellido, edad, colorPelo } = props;
    return (
        <div>
            <h1>{primerApellido}, {primerNombre}</h1>
            <p>Edad: {edad}</p>
            <p>Color de pelo: {colorPelo}</p>
            <br></br>
            <hr></hr>
        </div>
    );

}

export default PersonCard;