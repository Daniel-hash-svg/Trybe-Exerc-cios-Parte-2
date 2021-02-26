let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum=0
for(let index=0;index<numbers.length;index+=1) {
    sum=sum+numbers[index]; //tb pode ser  sum+=numbers[index]
}
console.log(sum)
//começa a soma com zero. Depois fica: a soma vai ser igual a var soma anterior(0) somado com o primeiro do array...sum=0+ 5.  Aí soma vai ser 5. Ai vai fazendo esse bagulho aí e no final da 278.

//daria pra fazer tb    for(index in number) {

