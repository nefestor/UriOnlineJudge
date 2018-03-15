var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);

if(a % b == 0 || b % a == 0)
	console.log('Sao Multiplos');
else
	console.log('Nao sao Multiplos');