var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift()).toFixed(2);
var b = parseFloat(lines.shift()).toFixed(2);
var nota = (((a * 3.5) + (b * 7.5)) / 11).toFixed(5);

console.log(`MEDIA = ${nota}`);