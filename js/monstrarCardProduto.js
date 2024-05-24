import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(id, nome, valor, imagem) {
    const card = document.createElement("li");
    card.className = "produto__card";
    card.id = `produto-${id}`;
    card.innerHTML = `
        <img class="produto-imagem" src="${imagem}" alt="">
        <p class="produto-nome">${nome}</p>
        <span class="produto-delete">
            <p class="produto-valor">${valor}</p>
            <input type="image" src="./assets/imagens/excluir.png" alt="remover Produto" data-delete data-id="${id}">
        </span>`;
    
    const iconDelete = card.querySelector("[data-delete]");
    iconDelete.addEventListener('click', async (evento) => {
        const cardId = evento.target.getAttribute('data-id');
        if (cardId) {
            await conectaApi.deleteProduto(cardId);
            card.remove(); 
        }
    });
    return card;
}

async function listaProdutos() {
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.id, elemento.nome, elemento.valor, elemento.imagem)));
}

listaProdutos();