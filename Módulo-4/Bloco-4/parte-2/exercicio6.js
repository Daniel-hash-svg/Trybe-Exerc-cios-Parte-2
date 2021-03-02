function somarTodosNumeros(numbers) {
  let total=0;// começa com 0.

  //numbers=[1,2,3,4,5]; caso eu escolha 5 como o último número. aí é pra somar esses números. NÃO SEI PQ MAS NÃO PUDE USAR ESSE ARRAY NESSA QUESTÃO. TAVA DANDO ZERO DE RESULTADO, MAS ISSO EU NÃO SEI PQ.
  //Também não deu certo usando o for i in aqui.

for (let index=0;index<=numbers;index+=1){
    total=total+index//enquanto vai tendo essa repetição, vai mudando o valor dessa var total
} 
return total 
}
console.log(somarTodosNumeros(5))
