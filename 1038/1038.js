var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var codigo = parseInt(lines[0]);
var qnt = parseInt(lines[1]);

switch (codigo) {
    case 1:
        console.log(`Total: R$ ${(qnt * 4).toFixed(2)}`);
        break;
    case 2:
        console.log(`Total: R$ ${(qnt * 4.5).toFixed(2)}`);
        break;
    case 3:
        console.log(`Total: R$ ${(qnt * 5).toFixed(2)}`);
        break;
    case 4:
        console.log(`Total: R$ ${(qnt * 2).toFixed(2)}`);
        break;
    case 5:
        console.log(`Total: R$ ${(qnt * 1.5).toFixed(2)}`);
        break;
    default:
        break;
}