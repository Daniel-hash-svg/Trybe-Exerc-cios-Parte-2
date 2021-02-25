let nota=55;

if (nota<0 || nota>100){
    console.log('ERRO')
}else if (nota>=90){
    console.log('A');
} else if (nota>=80){
    console.log('B');
} else if (nota>=70) {
    console.log( 'C');
} else if (nota >=60) {
    console.log('D');
} else if (nota>=50) {
    console.log('E');
} else{
    console.log('F');
}
// esse da nota ser menor ou maior que 100 e dar msng de erro é importante ele vir primeiro. Na vdd é importante ele não ser o último. Mas se ele for o primeiro é mais organizado. O último é pra ser else. Geralmente vc só bota o else e depois o console log no último.  Não botaria tipo:  else (nota<0 || nota>100). POr isso n é bom botar esse por último.
    
