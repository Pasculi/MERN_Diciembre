const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

// req is shorthand for request
// res is shorthand for response
app.get("/", (req, res) => {
    res.json({ message: "Hola Coding Dojo" });
});

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
};

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.street = faker.address.streetName();
        this.address = {
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}
//Creamos la ruta y hacemos la llamada a un usuario nuevo
app.get("/api/users/new", (req, res) => {
    res.json(new User());
});
//Creamos la ruta y hacemos la llamada a una empresa nueva
app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    res.json([new User(), new Company()]);
});

// Realizamos la conexión al servidor express
app.listen( port, () => console.log(`Se esta escuchando por el puerto: ${port}`) );