
/* setTimeout(function () {
    console.log("start")
}, 3000);

console.log("end"); */



//Callbacks
/* var exampleFunction = function (message) {
    console.log(message);
};

exampleFunction("Hello from exampleFunction");

function parentFunction(callback) {
    callback("information from the parent function");
}


parentFunction(exampleFunction);

parentFunction(function (message) {
    console.log(message);
}); */


//MAP - FILTER - REDUCER

const users = [
    {
        id: '01',
        title: 'Ms',
        firstName: 'Sara',
        lastName: 'Andersen',
        picture: 'https://randomuser.me/api/portraits/women/67.jpg',
        account: 25000
    },
    {
        id: '02',
        title: 'Ms',
        firstName: 'Caroline',
        lastName: 'Douglas',
        picture: 'https://randomuser.me/api/portraits/women/58.jpg',
        account: 0
    },
    {
        id: '03',
        title: 'Mr',
        firstName: 'Mario',
        lastName: 'Phillips',
        picture: 'https://randomuser.me/api/portraits/men/52.jpg',
        account: 40000
    },
    {
        id: '04',
        title: 'Mr',
        firstName: 'Ethan',
        lastName: 'Hunt',
        picture: 'https://randomuser.me/api/portraits/men/40.jpg',
        account: 40000
    }

]

//Metodo MAP itera en cada uno de los elementos de un array y retorna un nueo array


//const getFirstNameUsers = users.map((usuario,i) => usuario.firstName)

/* const getFirstNameUsers = () => users.map((usuario, i) => console.log(`Yo soy ${usuario.lastName}`)

)
const iteraPictures = () => users.map((foto, index) => console.log(foto.picture))

console.log(getFirstNameUsers())

iteraPictures(); */

//FILTER

/* const ages = [1,56,23,2,13,19]

const getAdults = ages.filter((edad) => edad < 18)

console.log(getAdults) */

/* const getThePersonWithNoMoney = () => users.filter((user) => user.account === 0 );

const getOnlyUserAccount = () => users.map((user, index) => `${user.firstName} ${user.account}`)

console.log(getThePersonWithNoMoney())

console.log(getOnlyUserAccount()) */

//const getUsers = (country) => users.map((usuario, index) => ({ ...usuario, index: index, country: country }))




const getUsers = () => users.map((usuario, index) => ({ Nombre: `${usuario.firstName} ${usuario.lastName} `, index:index, saldo:`${usuario.account}` }))


console.log(getUsers())