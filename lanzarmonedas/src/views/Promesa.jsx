import React from 'react';

const Promesa = () => {
    const noMondays = new Promise((resolve, reject) => {
        if (new Date().getDay() !== 1) {
            resolve("Bueno no es Lunes!");
            console.log(new Date().getDay())
        } else {
            reject("Alguien tiene un caso de los lunes!");
            console.log(new Date().getDay())
        }
    });
    noMondays
        .then(res => console.log(res))
        .catch(err => console.log(err));
    return (
        <div>
            <h1>Promesa</h1>
        </div>
    );
};

export default Promesa;




