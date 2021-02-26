let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
sum=0;

for(let index=0;index<numbers.length;index+=1) {
    sum+=numbers[index];
}
let average=sum/numbers.length; 
console.log(average)

if (average>20) {
    console.log('Maior que 20');
} else{
    console.log('Menor ou igual a 20');
}