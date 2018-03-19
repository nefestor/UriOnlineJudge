var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);
let aux;

if (a < b) {
    aux = a;
    a = b;
    b = aux;
} if (b < c) {
    aux = b;
    b = c;
    c = aux;
} if (a < b) {
    aux = a;
    a = b;
    b = aux;
}
if (a >= b + c)
    console.log('NAO FORMA TRIANGULO');
else {
	if(Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2))
		console.log('TRIANGULO RETANGULO');
	if(Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2))
		console.log('TRIANGULO OBTUSANGULO');
	if(Math.pow(a, 2) < Math.pow(b, 2) + Math.pow(c, 2))
		console.log('TRIANGULO ACUTANGULO');
	if(a == b && b == c)
		console.log('TRIANGULO EQUILATERO');
	if(a == b && c != a || a == c && b != a || b == c && a != b)
		console.log('TRIANGULO ISOSCELES');
}