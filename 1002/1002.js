var input = require('fs').readFileSync('./test.txt', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;
var raio = lines.shift();

console.log(`A=${parseFloat(pi * (raio*raio)).toFixed(4)}`);