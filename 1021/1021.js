var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var k = (lines.shift());
var a = parseInt(k / 1);
var b = parseInt((k % 1) * 100);


console.log('NOTAS:');
console.log(`${Math.floor(a / 100)} nota(s) de R$ 100.00`);
console.log(`${Math.floor((a % 100) / 50)} nota(s) de R$ 50.00`);
console.log(`${Math.floor(((a % 100) % 50) / 20)} nota(s) de R$ 20.00`);
console.log(`${Math.floor((((a % 100) % 50) % 20) / 10)} nota(s) de R$ 10.00`);
console.log(`${Math.floor(((((a % 100) % 50) % 20) % 10) / 5)} nota(s) de R$ 5.00`);
console.log(`${Math.floor((((((a % 100) % 50) % 20) % 10) % 5) / 2)} nota(s) de R$ 2.00`);
console.log('MOEDAS:');
console.log(`${Math.floor((((((a % 100) % 50) % 20) % 10) % 5) % 2)} moeda(s) de R$ 1.00`);
console.log(`${Math.floor((b / 50))} moeda(s) de R$ 0.50`);
console.log(`${Math.floor((b % 50) / 25)} moeda(s) de R$ 0.25`);
console.log(`${Math.floor(((b % 50) % 25) / 10)} moeda(s) de R$ 0.10`);
console.log(`${Math.floor((((b % 50) % 25) % 10) / 5)} moeda(s) de R$ 0.05`);
console.log(`${Math.floor(((((b % 50) % 25) % 10) % 5))} moeda(s) de R$ 0.01`);
