function verificaPalindrome(palavra) {

let arrayLetters=palavra.split("");//isso aqui vai gerar um array pra mim onde cada índice vai ser uma letra desse parâmetro:   palavra(qualquer palavra q eu escolher)

let isPalindrome=true;//começa considerando essa como verdadeira.

for (let index in arrayLetters) { //vou fazer rodagem nessa array com as letras
   if(arrayLetters[index] != palavra[(palavra.length -1) - index]) {
     isPalindrome=false;
   }//esse arrayLetters[index] vai começar como a primeira letra/índice desse array. A primeira letra é a que mais importa: tem que ser igual a última
}
   
return isPalindrome;
}
console.log(verificaPalindrome('arara')); //isso aqui PREEECISA ESTAR FORA DA ÚLTIMA } DA FUNÇÃO. Senão não aparece resultado.
//  a ideia desse for e if aqui é:  se a primeiral letra desse arrayLetters for diferente da última letra desse parâmetro palavra...aí a variavel isPalindrome deixa de ser true pra ser false, ou seja, a palavra que eu escolhi como parametro não é palindrome.  A Única coisa que não entendi nessa questão foi o index em palavra.... palavra[(palavra.length -1) - index])...pra mim eu só usei o index pro array Letters, e também não sei o pq desse - antes desse index.  Mas tirando isso, o racício pra essa questão já expliquei aqui.