let custo=10;
let custoTotal=custo + 0.2*custo; //20% de imposto
let valorVenda=20;
let lucroTotal= (valorVenda-custoTotal)* 1000; //são mil unidades

if (custo>=0 && valorVenda>=0) {
console.log(lucroTotal);
} else{
    console.log('erro')
}

