// let message = require('./module');
// console.log(message);

let Lamborgini = require('./lamborgini');
let config = require('./config');

// let { echo, area } = require('./methods');

// echo('test');
// console.log(area(5, 10));
let car = new Lamborgini('lamborghini');
// car.echo();
// car.drive();

console.log(JSON.stringify(config));
