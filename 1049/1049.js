var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var stringA = (lines.shift());
var stringB = (lines.shift());
var stringC = (lines.shift());

if (stringA == 'vertebrado' && stringB == 'ave' && stringC == 'carnivoro')
    console.log('aguia');
else if (stringA == 'vertebrado' && stringB == 'ave' && stringC == 'onivoro')
    console.log('pomba');
else if (stringA == 'vertebrado' && stringB == 'mamifero' && stringC == 'onivoro')
    console.log('homem');
else if (stringA == 'vertebrado' && stringB == 'mamifero' && stringC == 'herbivoro')
    console.log('vaca');
else if (stringA == 'invertebrado' && stringB == 'inseto' && stringC == 'hematofago')
    console.log('pulga');
else if (stringA == 'invertebrado' && stringB == 'inseto' && stringC == 'herbivoro')
    console.log('lagarta');
else if (stringA == 'invertebrado' && stringB == 'anelideo' && stringC == 'hematofago')
    console.log('sanguessuga');
else if (stringA == 'invertebrado' && stringB == 'anelideo' && stringC == 'onivoro')
    console.log('minhoca');