var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = (lines.shift());
var fixo = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());
var comissao = (vendas * 0.15);
var salario = (fixo + comissao).toFixed(2);
console.log(`TOTAL = R$ ${salario}`);