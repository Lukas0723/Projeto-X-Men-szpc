//OBJETIVO 1 - quando passar o mouse em cima do persnagem na listagem, devemos selecioná-lo
//PASSO 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima deles

const personagens = document.querySelectorAll('.personagem')

//passo 2 - adicionar classe selecionado no personagem que o usuário passar o cursor do mouse 
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        //passo 3- verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado');

        //OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a drescrição do personagem grande
        
        //passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        //passo 2 - alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;

        imagemPersonagemGrande.src = `./src/imagens1/imagens/card-${idPersonagem}.png`;

        //passo 3 - alterar nome do personagem grande

        const nomePersonagem = document.getElementById('nome-personagem')
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //Passo 4 - alterar a descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem')
        descricaoPersonagem.innerText = personagem.getAttribute('data-description')

    })
})

