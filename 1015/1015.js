var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var xy1 = lines[0].split(' ');
var xy2 = lines[1].split(' ');
var totalx = Math.pow((xy2[0]) - (xy1[0]), 2);
var totaly = Math.pow((xy2[1]) - (xy1[1]), 2);
var distancia = Math.sqrt((totalx + totaly).toFixed(4));

console.log(`${distancia.toFixed(4)}`);