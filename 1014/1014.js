var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseFloat(lines.shift());

console.log(`${(a / b).toFixed(3)} km/l`);