
 //n = 5;
 //symbol = '*';
//inputLine = '';//aqui é o TEXTO da linha(será um texto p cada linha). MUITO IMPORTANTE TER ISSO EM MENTE.
 //inputPosition = n; //  AQUI É A POSIÇÃO 5 DA LINHA, OU ENTÃO COLUNA 5
//line index seria o número da linha(vai da linha 1 a 5)
//columnIndex é o número da coluna dentro de cada linha
//São dois FOR. O primeiro é pra FAZER AS N LINHAS. O segundo é pra FAZER N COLUNAS(POSIÇÕES) DENTRO DE CADA UMA DESSAS N LINHAS. Observe que o for da coluna tá dentro do for das linhas. E observe que o if e else estão dentro do for da coluna. O critério de if else são dentro  de cada linha. Depois que acaba esse segundo for, aí vc faz console log do inputLine pra imprimir o texto da linha que vai dizer quantos * e quantos espaços se têm.
//OBS: O INPUTLINE DÁ AQUELA ACUMULADA SIM. USANDO DE EXEMPLO A PRIMEIRA LINHA PELO PRIMEIRO FOR: inputLine Começa com nada, depois fica um espaço na primeira coluna dessa primeira linha. Aí na segunda COLUNA da primeira linha, o inputline vai ser 2 espaços. Aí vai seguindo até o inputline ter 4 espaços em 4 colunas e aí vai ter um asterisco na quinta e última coluna(supondo que n=5).  Depois faz essa lógica nas próximas linhas tb(só que com o n diminuindo)
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine='';
  inputPosition-=1;
};
//Imprime o texto da linha, depois zera a linha e abaixa 1 do inputPosition pra começar a próxima linha do for.
//Importante tb: sobre os dois if elses. O segundo precisa ser  columnIndex<=n .  Quando fiz só columnsIndex<n...não deu certo. ficou faltando a última linha. Não sei pq não teve isso no primeiro for, mas teve isso no segundo. PORÉM, se fizer lineIndex e columnIndex começando com 1 ao invés de 0, e usar lineIndex e columnIndex<=n...aí deu certo
