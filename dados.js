let instrumentos = [
  {
    nome: "Guitarra",
    tipo: "Cordas",
    origem: "Espanha",
    descricao:
      "Instrumento de cordas muito versátil, usado em diversos estilos musicais.",
    imagem: "img/instrumentos/guitarra01.jpeg",
    som: "audios/guitarra.mp3",
    fonte:
      'Sound Effect by <a href="https://pixabay.com/pt/users/purnanand_wasave-29922665/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=123082" target="_blank" rel="noopener">Purnanand Wasave</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=123082"target="_blank" rel="noopener" >Pixabay</a>',
  },
  {
    nome: "Piano",
    tipo: "Teclado",
    origem: "Itália",
    descricao:
      "Instrumento de teclado com 88 teclas, amplamente utilizado em música clássica e popular.",
    imagem: "img/instrumentos/piano.webp",
    som: "audios/piano.mp3",
    fonte:
      'Sound Effect by <a href="https://pixabay.com/pt/users/u_cn78t2855u-43951266/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=210213"target="_blank" rel="noopener" >u_cn78t2855u</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=210213"target="_blank" rel="noopener">Pixabay</a>',
  },
  {
    nome: "Bateria",
    tipo: "Percussão",
    origem: "África",
    descricao:
      "Conjunto de instrumentos de percussão, utilizado para marcar o ritmo em diversas músicas.",
    imagem: "img/instrumentos/bateria.webp",
    som: "audios/bateria.mp3",
    fonte:
      'Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=25924" target="_blank" rel="noopener">Pixabay</a>',
  },
  {
    nome: "Violino",
    tipo: "Cordas",
    origem: "Itália",
    descricao:
      "Instrumento de cordas com quatro cordas, conhecido por seu som agudo e expressivo.",
    imagem: "img/instrumentos/violino.jpeg",
    som: "audios/violino.mp3",
    fonte:
      'Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=27946" target="_blank" rel="noopener">Pixabay</a>',
  },
  {
    nome: "Flauta",
    tipo: "Sopro",
    origem: "Egito",
    descricao: "Instrumento de sopro de madeira, com um som doce e melodioso.",
    imagem: "img/instrumentos/flauta.jpeg",
    som: "audios/flauta.mp3",
    fonte:
      'Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=72563" target="_blank" rel="noopener">Pixabay</a>',
  },
  {
    nome: "Violão",
    tipo: "Cordas",
    origem: "Espanha",
    descricao:
      "Instrumento de cordas pulsadas, popular em diversos estilos musicais, como o folk e o bossa nova.",
    imagem: "img/instrumentos/violao.jpeg",
    som: "audios/violao.mp3",
    fonte:
      'Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=7151" target="_blank" rel="noopener">Pixabay</a>',
  },
  {
    nome: "Saxofone",
    tipo: "Sopro",
    origem: "Bélgica",
    descricao:
      "Instrumento de sopro de metal, conhecido por sua sonoridade expressiva e versátil.",
    imagem: "img/instrumentos/saxofone.jpeg",
    som: "audios/saxofone.mp3",
    fonte:
      'Sound Effect by <a href="https://pixabay.com/pt/users/byronatoraustralia-22875837/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=11798" target="_blank" rel="noopener">Byron</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=11798" target="_blank" rel="noopener">Pixabay</a>',
  },
  {
    nome: "Trompete",
    tipo: "Sopro",
    origem: "Alemanha",
    descricao:
      "Instrumento de sopro de metal, utilizado em bandas de jazz, orquestras e fanfarras.",
    imagem: "img/instrumentos/trompete.jpeg",
    som: "audios/trompete.mp3",
    fonte:
      'Sound Effect by <a href="https://pixabay.com/pt/users/sound-work-43218837/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=200026" target="_blank" rel="noopener">Łukasz Przystasz</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=200026" target="_blank" rel="noopener">Pixabay</a>',
  },
  {
    nome: "Clarinete",
    tipo: "Sopro",
    origem: "Alemanha",
    descricao: "Instrumento de sopro de madeira, com um som claro e brilhante.",
    imagem: "img/instrumentos/clarinete.jpeg",
    som: "audios/clarinete.mp3",
    fonte:
      'Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=39383" target="_blank" rel="noopener">Pixabay</a>',
  },
  {
    nome: "Contrabaixo",
    tipo: "Cordas",
    origem: "Itália",
    descricao:
      "O maior instrumento da família do violino, com um som profundo e grave.",
    imagem: "img/instrumentos/contrabaixo.jpeg",
    som: "audios/contrabaixo.mp3",
    fonte:
      'Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=90288" target="_blank" rel="noopener">Pixabay</a>',
  },
  {
    nome: "Koto",
    tipo: "Cordas",
    origem: "Japão",
    preco: 2500,
    descricao: "Instrumento de cordas japonês, com um som suave e delicado.",
    imagem: "img/instrumentos/koto.jpeg",
    som: "audios/koto.mp3",
    fonte:
      'Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=106066" target="_blank" rel="noopener">Pixabay</a>',
  },
  {
    nome: "Bandolim",
    tipo: "Cordas",
    origem: "Itália",
    descricao:
      "Instrumento de cordas pulsadas, popular na música brasileira e italiana.",
    imagem: "img/instrumentos/bandolim.jpeg",
    som: "audios/bandolim.mp3",
    fonte:
      'Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=34892" target="_blank" rel="noopener">Pixabay</a>',
  },
  {
    nome: "Harpa",
    tipo: "Cordas",
    origem: "Mesopotâmia",
    descricao:
      "Instrumento de cordas de grande porte, com um som celestial e atemporal.",
    imagem: "img/instrumentos/harpa.jpeg",
    som: "audios/harpa.mp3",
    fonte:
      'Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=36586" target="_blank" rel="noopener">Pixabay</a>',
  },
  {
    nome: "Xilofone",
    tipo: "Percussão",
    origem: "África",
    descricao:
      "Instrumento de percussão com barras de madeira afinadas, utilizado em orquestras e bandas.",
    imagem: "img/instrumentos/xilofone.jpeg",
    som: "audios/xilofone.mp3",
    fonte:
      'Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=71191" target="_blank" rel="noopener">Pixabay</a>',
  },
  // Adicione mais instrumentos aqui
];

// let dados = [
//     {
//         name:"Rebeca Andrade",
//         descricao:"Rebeca Andrade é, sem dúvida,um dos maiores nomes da ginástica artística brasileira.",
//         link:"https://www.instagram.com/rebecarandrade/?hl=pt-br"
//     },
//     {
//         name:"Rayssa Leal",
//         descricao:"Rayssa Leal, a Fadinha, é uma das maiores promessas do skate brasileiro.",
//         link:"https://www.instagram.com/rayssalealsk8/?hl=pt-br"
//     },
//     {
//         name:"Gabriel Medina",
//         descricao:"Gabriel Medina é um dos maiores surfistas brasileiros da atualidade.",
//         link:"https://www.instagram.com/gabrielmedina/?hl=pt-br"
//     }
// ];

//Gerado com Geminy
function adicionarTags(instrumentos) {
  instrumentos.forEach((instrumento) => {
    instrumento.tags = [];

    switch (instrumento.tipo) {
      case "Cordas":
        instrumento.tags.push(
          "Cordas",
          "Musical",
          "Melodia",
          "Harmonia",
          "Acústico",
          "Pulsado"
        );
        break;
      case "Teclado":
        instrumento.tags.push(
          "Teclado",
          "Musical",
          "Melodia",
          "Harmonia",
          "Piano",
          "Teclados"
        );
        break;
      case "Percussão":
        instrumento.tags.push(
          "Percussão",
          "Ritmo",
          "Batida",
          "Bateria",
          "Tambor"
        );
        break;
      case "Sopro":
        instrumento.tags.push(
          "Sopro",
          "Melodia",
          "Harmonia",
          "Vento",
          "Metal",
          "Madeira"
        );
        break;
    }

    // Tags específicas para alguns instrumentos
    switch (instrumento.nome) {
      case "Guitarra":
        instrumento.tags.push(
          "Rock",
          "Pop",
          "Blues",
          "Solo",
          "Acústica",
          "Elétrica"
        );
        break;
      case "Piano":
        instrumento.tags.push(
          "Clássica",
          "Classica",
          "Jazz",
          "Pop",
          "Solfejo",
          "Acordes",
          "Melodia"
        );
        break;
      case "Bateria":
        instrumento.tags.push(
          "Rock",
          "Pop",
          "Jazz",
          "Groove",
          "Percussão",
          "Ritmo"
        );
        break;
      case "Violino":
        instrumento.tags.push(
          "Clássica",
          "Classica",
          "Orquestra",
          "Solo",
          "Cordas",
          "Arco"
        );
        break;
      case "Flauta":
        instrumento.tags.push(
          "Clássica",
          "Classica",
          "Flauta Doce",
          "Flauta Transversal",
          "Sopro",
          "Madeira"
        );
        break;
      case "Violão":
        instrumento.tags.push(
          "Acústico",
          "Pulsado",
          "Folk",
          "Bossa Nova",
          "Cordas"
        );
        break;
      case "Saxofone":
        instrumento.tags.push("Jazz", "Blues", "Funk", "Sopro", "Metal");
        break;
      case "Trompete":
        instrumento.tags.push("Jazz", "Orquestra", "Banda", "Sopro", "Metal");
        break;
      case "Clarinete":
        instrumento.tags.push("Clássica","Classica", "Banda", "Jazz", "Sopro", "Madeira");
        break;
      case "Contrabaixo":
        instrumento.tags.push("Jazz", "Rock", "Pop", "Baixo", "Cordas");
        break;
      case "Koto":
        instrumento.tags.push(
          "Japonês",
          "Tradicional Japonês",
          "Cordas",
          "Pulsado"
        );
        break;
      case "Bandolim":
        instrumento.tags.push(
          "Brasileiro",
          "Italiano",
          "Folk",
          "Cordas",
          "Pulsado"
        );
        break;
      case "Harpa":
        instrumento.tags.push("Clássica","Classica", "Orquestra", "Cordas", "Pulsado");
        break;
      case "Xilofone":
        instrumento.tags.push("Orquestra", "Percussão", "Madeira");
        break;
    }
  });
}

// Chamando a função para adicionar as tags
adicionarTags(instrumentos);
//Gerado com Geminy