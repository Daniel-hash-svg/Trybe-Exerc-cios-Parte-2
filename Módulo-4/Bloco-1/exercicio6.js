let pecaXadrez='bispo'

switch(pecaXadrez) {
    case 'rei':
        console.log('anda só uma casa pra cada lado');
        break;
    case 'rainha':
        console.log('anda todas as casas em qualquer direção');
        break;
    case 'bispo':
        console.log('anda em diagonal');
        break;
    case 'cavalo':
        console.log('anda em L');
        break;
    case 'torre':
        console.log('anda de forma lateral e horizontal')
        break;
    case 'peão':
        console.log('anda uma casa pra frente e come outras peças na diagonal') ;
        break;
    default:
        console.log('erro')  

}

