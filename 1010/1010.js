var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var peca1C = lines[0].split(' ');
var peca1N = lines[1].split(' ');
var total1 = peca1C[1] * peca1C[2];
var total2 = peca1N[1] * peca1N[2];

console.log(`VALOR A PAGAR: R$ ${(total1 + total2).toFixed(2)}`);