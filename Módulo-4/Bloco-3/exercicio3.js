let n=5;
let textLine=''; 
let position=n;//aqui vai ser a base pra eu fazer os ifs e elses
//indexLine seria o número das linhas que serão impressas. Não é o texto que aparecer nessas linhas(essa é o textLine)
for (let indexLine=1;indexLine<=n;indexLine+=1) {//repetição das linhas(vai das linhas 1 a n)
    for (let indexColumn=1;indexColumn<=n;indexColumn+=1){//repetição das colunas dentro de cada linha. Cada linha vai ter colunas(posições) de 1 a n
        if(indexColumn<position) {//ex:se coluna 1 é menor que coluna 5:
            textLine=textLine + ' '
        } else{//se coluna for maior ou igual a  n ...
            textLine=textLine +'*'
        }//a primeira linha fica 4 espaços e um * no final
    }
    console.log(textLine);
    textLine=''; //zera o textLine que foi armazenado nessa primeira linha, pra que fosse ir zera pra segunda linha e repetição e assim vai indo até o fim desse Primeiro FOR
    position-=1;//antes de ir pra segunda linha, precisa diminuir o position pra que no if else, não seja position=5, mas position=4. E aí vai indo: depois fica position=3; position=2 e position=1.
}