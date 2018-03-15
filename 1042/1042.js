var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');


var a = parseInt(lines[0]);
var b = parseInt(lines[1]);
var c = parseInt(lines[2]);
    if (a < b && b < c)
		console.log(`${a}\n${b}\n${c}`);
	else if(a < c && c < b)
	    console.log(`${a}\n${c}\n${b}`);
	else if(b < a && a < c)
	    console.log(`${b}\n${a}\n${c}`);
	else if(b < c && c < a)
	    console.log(`${b}\n${c}\n${a}`);
	else if(c < a && a < b)
	    console.log(`${c}\n${a}\n${b}`);
	else if(c < b && b < a)
	    console.log(`${c}\n${b}\n${a}`);
	console.log(`\n${a}\n${b}\n${c}`);