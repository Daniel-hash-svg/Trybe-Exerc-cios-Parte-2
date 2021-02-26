let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let counterOddNumber=0; //contador de número ímpar

for(let index=0;index<numbers.length;index+=1) {
    if (numbers[index]%2!==0){
        counterOddNumber+=1
    } 
} //aqui termina o for
// o outro if tem que começar fora desse for.Senão a resposta pode aparecer várias vezes.
    if(counterOddNumber==0){
        console.log('nenhum ímpar nesse array');
    } else{
        console.log(counterOddNumber);
    }


    
