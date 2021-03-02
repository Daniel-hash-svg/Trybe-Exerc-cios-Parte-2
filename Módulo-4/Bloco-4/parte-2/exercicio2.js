function indiceDoMaior(numbers) {//
 numbers=[2,3,6,7,10,1];//index aqui vai de 0 a 5. Aqui eu tive que tirar o let antes desse numbers, pq tava dando erro. Pra ter escrito numbers como parâmetro ali na linha 1, eu não pude usar let aqui na linha 2.
let biggerIndex=0// essa var maiorindice começa como 0
for (let index in numbers) { //vou fazer rodagem nesse array
    if (numbers[index]>biggerIndex){
        biggerIndex=index;//Só o index dá o índice. ele pede o ÍNDICE. Por isso, o biggerIndex vai virar o índice do maior número de numbers. Se fosse o valor, aí seria numbers[index].
    }
}
return biggerIndex

}
console.log(indiceDoMaior([2,3,6,7,10,1]))

