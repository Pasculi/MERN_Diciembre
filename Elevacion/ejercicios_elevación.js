var hello;
console.log(hello)
hello = "world";

//R undefined

var needle = 'haystack';
function test() {
    var needle = 'magnet';
    console.log(needle);
}
test();
//R magnet

var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//R super cool

var food = 'chicken';
console.log(food);
function eat() {
    var food = 'gone';
    food = 'half-chicken';
    console.log(food);

}
eat();
//R.chicken, half - chicken



var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);
console.log(food);

//R.chichen, fish -> food afuera no existe = chichen, chichen

var genre = "disco";
console.log(genre);
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre);

//R.disco, rock, r & b, disco


dojo = "san jose";
console.log(dojo);
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
learn();
console.log(dojo);

//R. san jose, seattle, burbank, san jose

function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));


//R.name: 'Chicago', students: 65, hiring: true