var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var func = parseInt(lines.shift());
var hrSal = parseInt(lines.shift());
var horas = parseFloat(lines.shift()).toFixed(2);
var total = (hrSal * horas).toFixed(2);

console.log(`NUMBER = ${func}`);
console.log(`SALARY = U$ ${total}`);