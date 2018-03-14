var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var provas = lines[0].split(' ');
var p1 = parseFloat(provas[0]);
var p2 = parseFloat(provas[1]);
var p3 = parseFloat(provas[2]);
var p4 = parseFloat(provas[3]);
var media = parseFloat((p1 * 2 + p2 * 3 + p3 * 4 + p4 * 1) / 10);
console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7.0)
    console.log('Aluno aprovado.')
else if (media >= 5.0 && media <= 6.9) {
    var sub = lines[1].split(' ');
    var p5 = parseFloat(sub[0]);
    console.log('Aluno em exame.')
    console.log(`Nota do exame: ${p5.toFixed(1)}`);
    media = (media + p5) / 2;
    if (parseFloat(media) >= 5.0)
        console.log('Aluno aprovado.');
    else
        console.log('Aluno reprovado.');

    console.log(`Media final: ${media.toFixed(1)}`);
}
else
    console.log('Aluno reprovado.');