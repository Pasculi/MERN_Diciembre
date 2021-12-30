Number.prototype.isPrime = function () {
    for (let i = 2; i < Math.sqrt(this); i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
};
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while (primeCount < 1e4) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

//recursivo*********************************
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
console.time('rFib');
rFib(20);
console.timeEnd('rFib');


//iterativo****************************************
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
console.time('iFib');
iFib(20);
console.timeEnd('iFib');

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae iste non, id amet iusto voluptatem alias laudantium atque similique cupiditate quam velit corrupti illo, soluta laborum ex aliquid perferendis.";
console.time('reversed1');
const reversed1 = story.split("").reverse().join("");
console.timeEnd('reversed1');

console.time('reversed2');
let reversed2 = '';
for (const char of story) {
    reversed2 = char + reversed2;
}
console.timeEnd('reversed2');

console.log(reversed1 === reversed2);

/*console$ node cuantoTiempo.js
The 10,000th prime number is 104003
This took 406.6424489617348 milliseconds to run
rFib: 1.61ms
iFib: 0.068ms
reversed1: 0.053ms
reversed2: 0.033ms
true
*/