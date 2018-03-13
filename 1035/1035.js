var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha = lines[0].split(' ');
var A = linha[0];
var B = linha[1];
var C = linha[2];
var D = linha[3];

if (B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && (A % 2) == 0)
    console.log('Valores aceitos');
else
    console.log('Valores nao aceitos');