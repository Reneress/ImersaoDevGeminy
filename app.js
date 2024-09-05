

function pesquisar() {
// Obtém o elemento da seção onde os resultados da pesquisa serão exibidos
let section = document.getElementById('resultados-pesquisa');
    
// Inicializa a variável para armazenar o HTML dos resultados
let resultados = '';
    
// Itera sobre a lista de instrumentos para gerar o conteúdo de cada um
for (let instrumento of instrumentos) {
  // Concatena o HTML para cada instrumento na variável 'resultados'
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