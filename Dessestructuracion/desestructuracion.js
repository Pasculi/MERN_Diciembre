/*
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

//Desesctructarando
const { email, password } = person;
const [caballo, perro, pescado, gato, pajaro] = animals

//Resultado
console.log(email)
console.log(caballo)

//Ahora queremos correo electrónico y contraseña de persony las primeras tres cadenas de animals

console.log(email, password)

console.log(caballo, perro, pescado)
*/
//Desestructuración Anidada
/*
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: ['bob@marley.com', 'bobby@email.com'],
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const {email:[,correo], addresses:[{address, city}, {zipcode}]} = person;

console.log(correo, address, city,zipcode )

*/
////Ejercicios desestructuracion

const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//R. Tesla
//R. Mercedes

//***************

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//console.log(name); Undefined
console.log(otherName);

//R. Elon
//R. undefined

//********************

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password);
console.log(hashedPassword);

//R. 12345
//R. undefined

//*********************

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers; 2
const [, , , second] = numbers; 5
const [, , , , , , , , third] = numbers; 2
//Predict the output
console.log(first == second);
console.log(first == third);

//R. false

//R. true

//************************

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//R. value
//R. [1, 5, 1, 8, 3, 3]
//R. 1
//R. 5