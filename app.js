//função para evitar erros de primeira letra Minuscula
function capitalizarPrimeiraLetra(campoPesquisa) {
  // Obter o valor atual do campo
  let valorAtual = campoPesquisa.value;
  // Dividir o texto em palavras
  let palavras = valorAtual.split(' ');
  // Capitalizar cada palavra
  for (let i = 0; i < palavras.length; i++) {
    palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1).toLowerCase();
  }
  // Juntar as palavras e atribuir ao campo
  campoPesquisa.value = palavras.join(' ');
}
//Gerado no Geminy

function pesquisar() {
  // Obtém o elemento da seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa");

  capitalizarPrimeiraLetra(campoPesquisa)
  // Inicializa a variável para armazenar o HTML dos resultados
  let resultados = "";
  // campoPesquisa = ' ' não mostrar nada
  if (!campoPesquisa.value) {
    section.innerHTML = "<p>Busca Vazia<p>";
    return;
  } else {
    // Itera sobre a lista de instrumentos para gerar o conteúdo de cada um
    for (let instrumento of instrumentos) {
      console.log(instrumento.nome.includes(campoPesquisa.value));
      //SE o valor de campo pesquisa existe na lista, carrega o html
      if (instrumento.nome.includes(campoPesquisa.value) || instrumento.tipo.includes(campoPesquisa.value)|| instrumento.tags.includes(campoPesquisa.value)) {
        resultados += ` 
        <div class="item-resultado">
          <!-- Título do instrumento, que será um link -->
          <h2>
              ${instrumento.nome}
          </h2>
          <!-- Descrição do instrumento -->
          <p class="descricao-meta">
              ${instrumento.tipo} | ${instrumento.origem}
          </p>
          <p class="descricao-meta">
            ${instrumento.descricao} 
          </p>
          <!-- Seção de mídia contendo o áudio e a imagem do instrumento -->
          <div class="midia">
            <!-- Controle de áudio que toca o som do instrumento -->
            <div class="audio">
              <audio controls>
                <!-- Fonte de áudio -->
                <source src=${instrumento.som} type="audio/mpeg">
              </audio>
            </div>
            <!-- Imagem do instrumento -->
            <div class="img">
              <img class="imagem" src=${instrumento.imagem} alt=${instrumento.nome}>
            </div>
          </div> 
          <!-- Fonte de informação do instrumento -->
          ${instrumento.fonte}
        </div>`;
      } 
    }
    //Se os resultados está vazio
    if(!resultados)
    {
      //Apresento mensagem
      section.innerHTML = `<p>Este instrumento não está cadastrado, tente algum destes: 
        Guitarra, Piano, Bateria, Violino, Flauta, Violão, Saxofone, Trompete, Clarinete, Contrabaixo, Koto, 
        Bandolim, Harpa, Xilofone. Ou escreva o tipo de música deste instrumento</p>`;
        return;
    }
  }

  // Define o conteúdo HTML da seção com os resultados gerados
  section.innerHTML = resultados;
}

// section.innerHTML = `
//     <div class="item-resultado">
//         <h2>
//             <a href="#"
//                 target="_blank"
//                 rel="noopener">
//                 ${dados[0].name}
//             </a>
//         </h2>
//         <p class="descricao-meta">
//             ${dados[0].descricao}
//         </p>
//         <a href=${dados[0].link}
//             target="_blank"
//             rel="noopener">
//             Rebeca Andrade
//         </a>
//         <div class="midia">
//             <div class="audio">
//                 <audio controls>
//                     <source src=${instrumentos[0].som} type="audio/mpeg">
//                 </audio>
//             </div>
//             <div class = "img">
//                 <img class="imagem" src=${instrumentos[0].imagem} alt=${instrumentos[0].nome}>
//             </div>
//         </div>

//         ${instrumentos[0].fonte}
//     </div>
// ` ;

// for (let dado of dados){
//     resultados += `
//     <div class="item-resultado">
//         <h2>
//             <a href="#"
//                 target="_blank"
//                 rel="noopener">
//                 ${dado.name}
//             </a>
//         </h2>
//         <p class="descricao-meta">
//             ${dado.descricao}
//         </p>
//         <a href=${dado.link}
//             target="_blank"
//             rel="noopener">
//             Rebeca Andrade
//         </a>
//     </div>
// ` ;
// }
