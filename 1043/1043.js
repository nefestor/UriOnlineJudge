var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);

if((a < b + c) && (b < a + c) && (c < a + b))
	console.log(`Perimetro = ${(a+b+c).toFixed(1)}`);
else
	console.log(`Area = ${(c*(a+b)/2).toFixed(1)}`);