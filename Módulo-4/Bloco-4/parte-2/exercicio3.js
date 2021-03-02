function indiceDoMenor(numbers) {
    numbers=[2,4,6,7,10,0,-3] ;
  smallerIndex=0;

  for (let index in numbers) //fazer rodagem desse aqui. Index seria os índices de numbers
     if (numbers[index]<smallerIndex) {
         smallerIndex=index;//smallIndex vai virar o ÍNDICE de número que vier a ser menor que smallerIndex. Se fosse o número em si, aí seria numbers[index]
     }
     return smallerIndex;
}
console.log(indiceDoMenor([2,4,6,7,10,0,-3]))

//a questão pede o ÍNDICE.
