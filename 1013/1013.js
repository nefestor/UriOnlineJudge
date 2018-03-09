var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);

if(A > B && A > C) {
    console.log(`${A} eh o maior`);
} else if(B > A && B > C) {
    console.log(`${B} eh o maior`);
} else {
    console.log(`${C} eh o maior`);
}