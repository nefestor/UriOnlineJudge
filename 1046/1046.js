var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var inicio = parseFloat(lines[0]);
var fim = parseFloat(lines[1]);
let soma;

if (inicio >= fim)
	soma = 24 - (inicio - fim)
else
	soma = (fim - inicio)

console.log(`O JOGO DUROU ${soma} HORA(S)`);