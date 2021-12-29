class Ninja {
    constructor(nombre, salud, velocidad, fuerza) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3
        this.fuerza = 3
    }
    sayName() {
        console.log(`El nombre del ninja es: ${this.nombre}`);

    }
    showStats() {
        console.log(`El nombre del ninja ${this.nombre} - Fuerza: ${this.fuerza} - Velocidad: ${this.velocidad} - Salud: ${this.salud}`);
    }
    drinkSake() {
        this.salud += 10;
        console.log(`Su salud ahora es de: ${this.salud}`)
    }
}

const ninja1 = new Ninja("Sekigahara", 100);

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();