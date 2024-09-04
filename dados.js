let instrumentos = [
    {
        nome: 'Guitarra',
        tipo: 'Cordas',
        origem: 'Espanha',
        preco: 1000,
        descricao: 'Instrumento de cordas muito versátil, usado em diversos estilos musicais.',
        imagem:"img\instumentos\guitarra01.jpeg",
        som: "audios\guitarra.mp3.crdownload",
        fonte:'href="https://pixabay.com/pt/users/shidenbeatsmusic-25676252/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=22108">Shiden Beats Music</a>'
    },
    {
        nome: 'Piano',
        tipo: 'Teclado',
        origem: 'Itália',
        preco: 5000,
        descricao: 'Instrumento de teclado com 88 teclas, amplamente utilizado em música clássica e popular.',
        imagem:"img\instumentos\piano.webp",
        som: "audios\piano.mp3",
        fonte:'Sound Effect by <a href="https://pixabay.com/pt/users/u_cn78t2855u-43951266/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=210213">u_cn78t2855u</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=210213">Pixabay</a>'
    },
    {
        nome: 'Bateria',
        tipo: 'Percussão',
        origem: 'África',
        preco: 2000,
        descricao: 'Conjunto de instrumentos de percussão, utilizado para marcar o ritmo em diversas músicas.',
        imagem:"img\instumentos\bateria.webp",
        som: "audios\bateria.mp3",
        fonte:'Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=25924">Pixabay</a>'
    },
    {
        nome: 'Violino',
        tipo: 'Cordas',
        origem: 'Itália',
        preco: 3000,
        descricao: 'Instrumento de cordas com quatro cordas, conhecido por seu som agudo e expressivo.',
        imagem:"img\instumentos\violino.jpeg",
        som: "audios\violino.mp3",
        fonte:'Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=27946">Pixabay</a>'
    },
    {
        nome: 'Flauta',
        tipo: 'Sopro',
        origem: 'Egito',
        preco: 800,
        descricao: 'Instrumento de sopro de madeira, com um som doce e melodioso.',
        imagem:"img\instumentos\flauta.jpeg",
        som: "audios\flauta.mp3",
        fonte:'Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=72563">Pixabay</a>'

    },

    {
        nome: 'Violão',
        tipo: 'Cordas',
        origem: 'Espanha',
        preco: 500,
        descricao: 'Instrumento de cordas pulsadas, popular em diversos estilos musicais, como o folk e o bossa nova.',
        imagem:"img\instumentos\violao.jpeg",
        som: "audios\violao.mp3",
        fonte:'Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=7151">Pixabay</a>'
    },
    {
        nome: 'Saxofone',
        tipo: 'Sopro',
        origem: 'Bélgica',
        preco: 2000,
        descricao: 'Instrumento de sopro de metal, conhecido por sua sonoridade expressiva e versátil.',
        imagem:"img\instumentos\saxofone.jpeg",
        som: "audios\saxofone.mp3",
        fonte:'Sound Effect by <a href="https://pixabay.com/pt/users/byronatoraustralia-22875837/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=11798">Byron</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=11798">Pixabay</a>'
    },
    {
        nome: 'Trompete',
        tipo: 'Sopro',
        origem: 'Alemanha',
        preco: 1500,
        descricao: 'Instrumento de sopro de metal, utilizado em bandas de jazz, orquestras e fanfarras.',
        imagem:"img\instumentos\trompete.jpeg",
        som: "audios\trompete.mp3",
        fonte:'Sound Effect by <a href="https://pixabay.com/pt/users/sound-work-43218837/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=200026">Łukasz Przystasz</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=200026">Pixabay</a>'
    },
    {
        nome: 'Clarinete',
        tipo: 'Sopro',
        origem: 'Alemanha',
        preco: 1200,
        descricao: 'Instrumento de sopro de madeira, com um som claro e brilhante.',
        imagem:"img\instumentos\clarinete.jpeg",
        som: "audios\clarinete.mp3",
        fonte:'Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=39383">Pixabay</a>'
    },
    {
        nome: 'Contrabaixo',
        tipo: 'Cordas',
        origem: 'Itália',
        preco: 3000,
        descricao: 'O maior instrumento da família do violino, com um som profundo e grave.',
        imagem:"img\instumentos\contrabaixo.jpeg",
        som: "audios\contrabaixo.mp3",
        fonte:'Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=90288">Pixabay</a>'
    },
    {
        nome: 'Koto',
        tipo: 'Cordas',
        origem: 'Japão',
        preco: 2500,
        descricao: 'Instrumento de cordas japonês, com um som suave e delicado.',
        imagem:"img\instumentos\koto.jpeg",
        som: "audios\koto.mp3",
        fonte:'Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=106066">Pixabay</a>'
    },
    {
        nome: 'Bandolim',
        tipo: 'Cordas',
        origem: 'Itália',
        preco: 800,
        descricao: 'Instrumento de cordas pulsadas, popular na música brasileira e italiana.',
        imagem:"img\instumentos\bandolim.jpeg",
        som: "audios\bandolim.mp3",
        fonte:'Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=34892">Pixabay</a>'
    },
    {
        nome: 'Harpa',
        tipo: 'Cordas',
        origem: 'Mesopotâmia',
        preco: 8000,
        descricao: 'Instrumento de cordas de grande porte, com um som celestial e atemporal.',
        imagem:"img\instumentos\harpa.jpeg",
        som: "audios\harpa.mp3",
        fonte:'Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=36586">Pixabay</a>'
    },
    {
        nome: 'Xilofone',
        tipo: 'Percussão',
        origem: 'África',
        preco: 1000,
        descricao: 'Instrumento de percussão com barras de madeira afinadas, utilizado em orquestras e bandas.',
        imagem:"img\instumentos\xilofone.jpeg",
        som: "audios\xilofone.mp3",
        fonte:'Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=71191">Pixabay</a>'
    },
    // Adicione mais instrumentos aqui
];

let dados = [
    {
        name:"Rebeca Andrade",
        descricao:"Rebeca Andrade é, sem dúvida,um dos maiores nomes da ginástica artística brasileira.",
        link:"https://www.instagram.com/rebecarandrade/?hl=pt-br"
    },
    {
        name:"Rayssa Leal",
        descricao:"Rayssa Leal, a Fadinha, é uma das maiores promessas do skate brasileiro.",
        link:"https://www.instagram.com/rayssalealsk8/?hl=pt-br"
    },
    {
        name:"Gabriel Medina",
        descricao:"Gabriel Medina é um dos maiores surfistas brasileiros da atualidade.",
        link:"https://www.instagram.com/gabrielmedina/?hl=pt-br"
    }
]

// Criando um array de objetos para armazenar os filmes
const filmesAcao = [
    {
        titulo: "John Wick: Baba Yaga",
        sinopse: "John Wick continua sua jornada como um assassino implacável, enfrentando novos inimigos poderosos e perigosas missões.",
        genero: "Ação"
    },
    {
        titulo: "Missão Impossível - Efeito Fallout",
        sinopse: "Ethan Hunt e sua equipe da IMF se envolvem em uma perigosa missão para recuperar plutônio que caiu em mãos erradas.",
        genero: "Ação"
    },
    {
        titulo: "Mad Max: Estrada da Fúria",
        sinopse: "Em um futuro pós-apocalíptico, Max Rockatansky se junta a Imperator Furiosa em uma jornada através do deserto, fugindo de uma força implacável.",
        genero: "Ação"
    },
    {
        titulo: "O Protetor",
        sinopse: "Um ex-assassino tenta se livrar do passado violento e proteger uma jovem garota.",
        genero: "Ação"
    },
    {
        titulo: "Duro de Matar",
        sinopse: "Um policial de Nova York luta para salvar sua esposa e outros reféns durante um assalto a um prédio.",
        genero: "Ação"
    }
];