let n=5;//vai ser o número de asteriscos na base do triangulo
let textLine='';//o texto que aparece nas linhas
let indexLine='';//número de linhas
let indexColumn='';//número de colunas
let middle=(n+1)/2;//o meio do triangulo é a posição 3. Então aumenta 1 nesse n e divide por 2
let leftSide=middle//colocar lado esquerdo e direito ==middle(3) é um jeito pra poder usar no else e if 
let rightSide=middle
for (indexLine=0;indexLine<=middle;indexLine+=1){// esse for é pro tanto de linha que vai ter. Nesse caso, são 4 linhas(0 a 3), e a primeira linha será toda branca
  for(indexColumn=1;indexColumn<=n;indexColumn+=1){//esse for é pro número de colunas que vai ter em cada linha. Vai da coluna 1 a coluna 5
    if(indexColumn>leftSide && indexColumn<rightSide){
        textLine=textLine + '*';
    }else {
      textLine=textLine+ ' '
    }//se a coluna(posição da linha for maior que 3 E menos que 3, aí textLine gnha um *, senão ganha espaço. Mas veja, é IMPOSSÍVEL ser maior e menor  q 3 ao mesmo tempo. Por isso a primeira linha é só feita de espaços(linha toda branca))
  }
  console.log(textLine);//imprime a primeira linha
  textLine='';//daí zera que é pra ela ir zerada pra segunda repetição
  leftSide-=1;
  rightSide+=1;//MUITO IMPORTANTE: antes de encerrar a repetição, vai diminuindo o lado esquerdo em 1 e vai aumentando o lado direito em 1(esquerdo vai pra 2 e direito vai pra 4 na segunda repetição). Daí vai mexer lá no if e else. É isso que vai fazer com que a segunda linha tenha asterisco na posição 3; A terceira linha(ou linha 2) terá asterisco no 2,3 e 4. E a linha 4(que é a linha 3) vai ter todas as colunas preenchidas por *.
}