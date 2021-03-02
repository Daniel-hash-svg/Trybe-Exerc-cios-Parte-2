let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber =200;
//a única coisa dessa questão é que precisa inventar um número nessa smallestNumber que seja maior que o maior número do meu array(nesse caso:maior que 100)
for(let index=0;index<numbers.length;index+=1){
  if(numbers[index]<smallestNumber) {
      smallestNumber=numbers[index];
  }
  
}
console.log(smallestNumber);

