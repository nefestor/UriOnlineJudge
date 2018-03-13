var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());
console.log(`${Math.floor(a / 365)} ano(s)`);
console.log(`${Math.floor((a % 365) / 30)} mes(es)`);
console.log(`${Math.floor((a % 365) % 30)} dia(s)`);