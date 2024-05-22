import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(nome, valor, imagem){
    const card = document.createElement("li");
    card.className = "produto__card";
    card.innerHTML = `<img class="produto-imagem" src="${imagem}" alt="">
    <p class="produto-nome">${nome}</p>
    <span class="produto-delete">
        <p class="produto-valor">$ ${valor}</p>
        <img src="./assets/imagens/excluir.png" alt="Remover Produto" data-delete>
    </span>`
    return card;
}

async function listaProdutos(){
   const listaApi = await conectaApi.listaProdutos();
   listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.valor, elemento.imagem)))
}

listaProdutos();