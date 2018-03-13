var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha = lines[0].split(' ');
var A = linha[0];
var B = linha[1];
var C = linha[2];
var delta = Math.pow(B, 2) - 4 * A * C;

if (A != 0 && delta >= 0) {
    var R1 = ((-B + Math.sqrt(delta)) / (2 * A)).toFixed(5);
    var R2 = ((-B - Math.sqrt(delta)) / (2 * A)).toFixed(5);
    console.log(`R1 = ${R1}`);
    console.log(`R2 = ${R2}`);
} else
    console.log('Impossivel calcular');