let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
  };
  
  let secondInfo = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
  };

  for (index in info) {
      if (info[index]=="Sim" && secondInfo[index]=="Sim"){
          console.log('ambos recorrentes');
      } else{
          console.log(info[index] + ' '+ 'e'+ ' '+ secondInfo[index]);
      }
  }
  //pelo que entendi, ele vai rodar info e secondInfo ao mesmo tempo. Só não entendi o pq disso, já que eu coloquei for (index in info), não coloquei SecondInfo. Enfim, aí ele vai rodar os dois, e quando nos dois objetos tiver uma chave que tenha "Sim", aí imprime: 'ambos recorrentes'.