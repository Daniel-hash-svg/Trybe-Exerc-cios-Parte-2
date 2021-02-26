let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
sum=0;

for(let index=0;index<numbers.length;index+=1) {
    sum+=numbers[index];
}
let average=sum/numbers.length; //obs aqui logo abaixo
console.log(average)

//eu achei que fosse ser (length-1),mas aí dava erro. Então fica aí o aviso. se for fazer média de um array, tem que usar  o length e não o length menos 1.

