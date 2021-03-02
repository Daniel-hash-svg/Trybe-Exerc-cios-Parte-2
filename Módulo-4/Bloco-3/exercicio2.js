let n=7;
let asteriskLine='';

for(let index=0;index<n;index+=1) {
    asteriskLine=asteriskLine + '*';
    console.log(asteriskLine)
}
//enquanto tiver a rodagem do FOR, a linha de asterisco vai ganhando um asterisco a mais e logo depois já vai tendo seu console log.  se n=7  Primeira linha com só um *, aí já imprime...segunda linha com 2 asteriscos, aí já imprime....e ai vai indo até acabar a repetição na sétima vez: última linha terá 7 * e vai ter seu console.log logo depois. Aí fica nesse formato de triangulo tendo n asteriscos na sua base.