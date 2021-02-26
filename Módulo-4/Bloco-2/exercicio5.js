let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber=0;

for(let index=0;index<numbers.length;index+=1) {
    if (numbers[index] > higherNumber) {
       higherNumber=numbers[index]
    }
} 
console.log(higherNumber);

//se um numero desse array for maior que o higherNumber, aí higherNumber recebe esse novo valor. Vai fazendo esse esquema enquanto o for vai rodando por todo o array...aí quando acabar essa rodagem pelo array, quero que imprima qual que é o higherNumber que ficou. É tranquilo
