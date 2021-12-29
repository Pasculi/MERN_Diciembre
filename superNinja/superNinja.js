class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3
        this.fuerza = 3
    }

}
//Sacamos los metodos y se los asignamos al prototipo Ninja, para que este disponuble para futuros Ninjas. Asi evitamos que el metodo este duplicada para cada Objeto

Ninja.prototype.sayName = function () {
    console.log(`Mi nombre es: ${this.nombre}`);

}
Ninja.prototype.showStats = function () {
    console.log(`El nombre del ninja: ${this.nombre} - Fuerza: ${this.fuerza} - Velocidad: ${this.velocidad} - Salud: ${this.salud}`);
}
Ninja.prototype.drinkSake = function () {
    this.salud += 10
    console.log(`Mi nombre es ${this.nombre} y tengo salud de ${this.salud}`);
}

//Herencia prototipica
//Creación de funcion constructora Sensei

class Sensei extends Ninja {
    constructor(nombre, salud, velocidad, fuerza) {
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = 10;
    }
}
Ninja.prototype.speakWisdom = function () {
    console.log(`Yo soy un Sensei: ${this.nombre} y mi sabiduría es de ${this.sabiduria}`);

}
const ninja1 = new Ninja("Sekigahara", 100);
const ninja2 = new Sensei("Akira", 120);


ninja1.sayName();
ninja2.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja2.speakWisdom();
ninja2.drinkSake();