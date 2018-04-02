var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salario = parseInt(lines[0]);
var imposto = 0;
var aux = 0;
var res = 0;


    if (salario > 2000 && salario <= 3000) {
        aux = salario - 2000;
        res = (aux/100)*8;
        imposto += res;
    }
    else if (salario > 3000 && salario <= 4500) {
        aux = salario - 3000;
        res = (aux/100)*18;
        imposto += res;
        res = (1000/100)*8;
        imposto += res;
    }
    else if (salario > 4500) {
        aux = salario - 4500;
        res = (aux/100)*28;
        imposto += res;
        res = (1500/100)*18;
        imposto += res;
        res = (1000/100)*8;
        imposto += res;
    }
    if(salario <= 2000)
        console.log('Isento');
    else 
        console.log(`R$ ${(imposto).toFixed(2)}`);