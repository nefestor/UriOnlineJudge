var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines.shift());

if(salario >= 0 && salario <= 400) {
	console.log(`Novo salario: ${(salario + salario* 0.15).toFixed(2)}`);
	console.log(`Reajuste ganho: ${(salario * 0.15).toFixed(2)}`);
	console.log('Em percentual: 15 %');
} else if(salario > 400 && salario <= 800) {
	console.log(`Novo salario: ${(salario + salario* 0.12).toFixed(2)}`);
	console.log(`Reajuste ganho: ${(salario * 0.12).toFixed(2)}`);
	console.log('Em percentual: 12 %');
} else if(salario > 800 && salario <= 1200) {
	console.log(`Novo salario: ${(salario + salario* 0.10).toFixed(2)}`);
	console.log(`Reajuste ganho: ${(salario * 0.10).toFixed(2)}`);
	console.log('Em percentual: 10 %');
} else if(salario > 1200 && salario <= 2000) {
	console.log(`Novo salario: ${(salario + salario* 0.07).toFixed(2)}`);
	console.log(`Reajuste ganho: ${(salario * 0.07).toFixed(2)}`);
	console.log('Em percentual: 7 %');
} else if(salario > 2000) {
	console.log(`Novo salario: ${(salario + salario* 0.04).toFixed(2)}`);
	console.log(`Reajuste ganho: ${(salario * 0.04).toFixed(2)}`);
	console.log('Em percentual: 4 %');
}