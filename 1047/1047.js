var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var horaInicio = parseInt(lines[0]);
var minutoInicio = parseInt(lines[1]);
var horaFinal = parseInt(lines[2]);
var minutoFinal = parseInt(lines[3]);
let horas;
let minutos;

if (horaInicio >= horaFinal)
	horas = 24 - (horaInicio - horaFinal)
else
	horas = horaFinal - horaInicio;

if(minutoInicio >= minutoFinal) {
	minutos = 60 - (minutoInicio - minutoFinal)
	horas--;
}
else
	minutos = minutoFinal - minutoInicio;
if(minutos == 60) {
	minutos = 0
	horas++;
}
console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);