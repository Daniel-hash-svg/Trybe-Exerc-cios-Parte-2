let a=4;
let b=9;
let c=7;
let par=false;

if(a%2!==0 || b%2!==0 || c%2!==0){
    par=true //basta q uma das 3 var seja ímpar, aí a var par vira true e vai aparecer na resposta esse par que virou true.
}
console.log(par); // se nenhum for ímpar, aí aparece a var par normal(que começa como false).

//essa é a mesma ideia do exercício passado(ex 9). Só muda que !== simboliza: diferente.