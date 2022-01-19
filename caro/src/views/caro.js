/* const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'beimone@gmail.com',
    hobbies: ['tennis', 'football', 'basketball'],

} */

//const { firstName, lastName, age, email } = user;

//Podemos cambiar el nombre de las variables

/* const hob = 'hobbies';

console.log(`${firstName} ${lastName} tiene ${age} años y su email es ${email} y uno de sus pasatiempoes es ${user[hob][0]}`);

const students = ['Jorge', 'John','Susana', 'Jane', 'Juan'];

const[firstStudents, ,thirdStudent] = students;

console.log(`${firstStudents}`);
console.log(`${thirdStudent}`); */

/*  const person = {
    name: 'John',
    age: 30,
    address: ['Estocolmo 405'],
    pasatiempos: ['leer por horas', 'salir andar en bici', 'maratonear netflix viendo doramas']
 }
  */

//console.log(person)

//const [, segundo,] = person.pasatiempos;

//console.log(segundo);

//spread operator

//const copyPerson = {...person, direccion: 'Estocolmo 405', age: 48};

/* console.log(copyPerson);
console.log(person) */

/* const fruits=['apple', 'orange', 'banana']

const moreFruits=['pinapple','watermelon']

const copyFruits =[...fruits, ...moreFruits]

console.log(copyFruits) */

/* const {age, address, ...loquequeda } = person;

//const resto = rest;

console.log(loquequeda) */

function suma(a, b) {
    return a + b
}

const sumArrow = (a, b) => a + b

console.log(sumArrow(10, -1))
console.log(suma(5, 4))
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(materials.map(material => material.length));

const restriction = (age) => {
    return age <= 18 ? "Eres menor de edad" : "Eres mayor de edad"
}

console.log(restriction(19))