let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let counterOddNumber=0; //contador de número ímpar

for(let index=0;index<numbers.length;index+=1) {
    if (numbers[index]%2!==0){
        counterOddNumber+=1
    } 
} //aqui termina o for
// o outro if tem que começar fora desse for.Senão a resposta pode aparecer várias vezes.
    if(counterOddNumber==0){//se fizer  a rodagem e esse contador continuar zero, é pq não tem nenhum ímpar
        console.log('nenhum ímpar nesse array');
    } else{
        console.log(counterOddNumber);//aí imprime o valor q tá essa var que diz quantos ímpares têm
    }
//o for vai fazer a rodagem pelo array. Se um número for ímpar, aí aumenta o a var do contador de número impar. E POR ENQUANTO NÃO IMPRIME NADA.   O foda dessa questão é que precisa fechar o for logo depois desse if. E fazer outro if e else por fora. Se n for desse jeito, fica imprimindo resultado várias vezes.
// Já fora do for, se tiver na rodagem pelo array n tiver nenhum número ímpar, aí aparece 'nenhum ímpar'.  Se n for o caso, aí imprime o contador, e aí vai dizer quantas vezzes apareceu número impar no array.

    
