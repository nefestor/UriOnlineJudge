var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);
var pi = 3.14159;

console.log(`TRIANGULO: ${((A * C) / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(Math.pow(C, 2) * pi).toFixed(3)}`);
console.log(`TRAPEZIO: ${(C * (A + B) / 2).toFixed(3)}`);
console.log(`QUADRADO: ${Math.pow(B, 2).toFixed(3)}`);
console.log(`RETANGULO: ${(A * B).toFixed(3)}`);