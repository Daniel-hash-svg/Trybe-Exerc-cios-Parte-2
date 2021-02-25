//ANTES DE TUDO: A POSIÇÃO IMPORTA MUITO*** O salbase e o saliquido PRECISAM FICAR ONDE EU BOTEI, SENÃO DÁ ERRADO!!!!!
//essa achei mt chatinha de visualizar como fazer
//tem que fazer o if e else pra primeiro pegar as alíquotas de INSS
// aí se tem o salário base= salário bruto - alíquota do INSS
//depois vai fazer if e else pra ter as alíquotas do IR, e esse IR vai ser sobre o SALÁRIO BASE.
// Aí a resposta é: Salário base - aliquota do IR. Aí se tem o salário líquido.
let salBruto=3000.00;
let inss;

let ir;


if (salBruto<=1556.94){
   inss= 0.08*salBruto;
} else if ( salBruto<=2594.92){
    inss=0.09*salBruto;
} else if (salBruto<=5189.82){
    inss=0.11*salBruto;
} else{
    inss=570.88;
}
let salBase=salBruto-inss; //ESSA PORRA PRECISA SER AQUI embaixo do if else que usei p alíquota do inss. SENÃO DÁ ERRADO

// agora fazer a alíquota do IR(e devo usar o salario base)

if (salBase<=1903.98){
    ir=0;
} else if(salBase<=2826.65){
    ir=(0.075*salBase) - 142.80;
} else if (salBase<=3751.05){
    ir=(0.15*salBase)-354.80;
} else if (salBase<=4664.68){
    ir=(0.225*salBase)-636.13;
} else{
    ir=(0.275*salBase)- 869.36;
}

//ESSA PORRA DESSA VAR SALIQUIDO PRECISA SER AQUI embaixo do if else que usei p alíquota do inss, SENÃO DÁ ERRADO.
let saliquido= salBase- ir //é a variavel que eu quero descobrir no final quando dizer os dois if else.

console.log(saliquido);
//O PQ A POSIÇÃO IMPORTA:  eu fiz a let salBase e saliquido lá no começo. Tava dando erro. O pq disso: fazendo lá em cima no começo do meu js, as outras variaveis importantes pro cálculo não tinham o valor certo.  Pode ver lá em cima que tá inss; e  ir;   nessa hora eu declaro a variavel, mas elas n tem valor naquele momento. Se eu calculo salBase e saliquido lá em cima, O INSS E O IR NÃO VÃO TER OS VALORES QUE ESTABELECI NOS ELSE IF. Por isso n dá certo
//o salBase fica depois do primeiro if else, que aí já tenho o valor Bruto(esse é de boa ficar lá em cima) e do inss tb(estabelecido nos critérios do primeiro if else).  Aí eu tenho o salbase. E aí esse salbase vai ser usado nos critérios do Segundo else if. EU N POSSO BOTAR O SALBASE NO FINAL JUNTO COM O SALIQUIDO PQ SENÃO EU TB N VOU TER O VALOR DO SALBASE PRA USAR NO SEGUNDO ELSE IF.

//ENFIM: let salbase depois do primeiro else if e let ir depois do segundo else if.
