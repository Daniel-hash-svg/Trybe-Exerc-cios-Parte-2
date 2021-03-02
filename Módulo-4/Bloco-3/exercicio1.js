let n=5;
let asteriskLine='';

//esse primeiro for é pra definir que a linha de astericos vai ganhando um * por vez, até acabar a repetição. Ou seja, a linha vai ter o * n vezes. Se n=5, então uma linha vai ter *****.
for(let index=0;index<n;index+=1) {
    asteriskLine=asteriskLine + '*';
}
//esse segundo for é pra dizer: enquanto vai tendo essa rodagem, vai imprimindo essa linha de astericos definida no primeiro for. Então, se n=5: vai ter console.log da linha de asteriscos 5 vezes.
//Teve que fazer um segundo for, porque se colocasse dentro do primeiro for, dava um resposta diferente(resposta da questao 2), e se deixasse  fora do primeiro for, mas isolado, aí só aparecia uma linha com n asteriscos.
for(let index=0;index<n;index+=1) {
    console.log(asteriskLine);
}

//olhando dessa forma, não é difícil a questão.