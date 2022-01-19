class SupeHero {
    constructor(name, skills, strong, weakness) {
        this.name = name;
        this.skills = skills;
        this.lifes = 100;
        this.strong = !strong ? 10 : strong;
        this.weakness = weakness;
    }
    fight() {
        this.strong -= 10;

    }

    teach() {
        this.lifes += 10;
        this.strong += 10;
        console.log(`Ahora soy mas sabio y tengo fuerza ${this.strong} y vida ${this.lifes}`)
    }
    salvarVidas(skill) {
        this.skills = [...this.skills, skill];
        console.log(`He ganado una habilidad mas, ahora tengo ${this.skills.length} habilidades y son: ${this.skills.join(', ')}`)
    }
    greet() {
        console.log(`Hola soy ${this.name}`)
    }
}

class Acqua extends SupeHero {
    constructor(aqcuaSkills) {
        super('pececin', ['respirar bajo el agua', 'tener aletas', 'comunicarse con los animales'], 500, 'aire');
        this.skills = [...this.skills, aqcuaSkills]

    }
    greetAcqua() {
        super.greet();
        this.teach();
        console.log(this.skills);

    }

}


//const super1 = new SupeHero('Batman', ['dinero', 'tecnología', 'auto', 'avión'], 200, 'compasivo');

/* super1.greet();
super1.teach();
super1.salvarVidas('felicidad');
super1.salvarVidas('Armadura'); */

const acquaHero = new Acqua('Nadar al mar Caribe');
acquaHero.greetAcqua();

//console.log(super1.skills);
//Herencia

