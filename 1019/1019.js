var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());
console.log(`${Math.floor(a / 3600)}:${Math.floor((a % 3600) / 60)}:${Math.floor((a % 3600) % 60)}`);