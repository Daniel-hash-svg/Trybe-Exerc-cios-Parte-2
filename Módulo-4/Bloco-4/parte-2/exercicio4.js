//essa questão trata de comprimento das palavras, então ela trata sobre LENGTH.

function maiorNome(nome) {

    nome =['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let biggestName=nome[0];// começa essa var com o nome José. Não pude usar o length aqui em nome[0], não sei pq, mas não deu certo aqui.
  for (let index in nome){ //fazer rodagem por esse array

    if (nome[index].length>biggestName.length) {

          biggestName=nome[index];//aqui ele quer o nome em si, por isso nome[index]
      }//se algum nome do array tiver um length maior que o length de biggestName(que de inicio é o José), aí biggestName vira esse novo nome(dessa vez não é índice nem o comprimento que ele quer na resposta.)
     
  }
  return biggestName //ATENÇÃO: esse return sempre vem antes do último }. Senão o resultado sai errado. Perdi um tempão só por causa disso.
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));