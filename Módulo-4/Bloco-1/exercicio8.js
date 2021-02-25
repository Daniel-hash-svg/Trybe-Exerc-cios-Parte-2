let a=5;
let b=7;
let c=12;
let impar=false; // essa var começa como falso

if (a%2==0 || b%2==0 || c%2==0) {
    impar=true //se tive pelo menos um núm par, aí essa var vira true
}
console.log(impar) // se n tiver nenhum que seja par, aí só imprime a var normalmente(que é false)
//IMPORTANTE: A QUESTÃO QUER QUE SÓ USE UM IF E NÃO USE NEM O ELSE. Aí tem que fazer desse jeito. N posso usar console.log 2 vezes pq senão imprime resultados duas vezes. Se pudesse usar o else...aí nem precisaria declarar essa let impar e podia usar console log pro if e pro else




