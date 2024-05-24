import { conectaApi } from "./conectaApi.js";
import verificaValor from "./verificaValor.js";

const formulario = document.querySelector("[data-formulario]");
const lista = document.querySelector("[data-lista]");

async function criarCardProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valorCampo = document.querySelector("[data-valor]");
    const imagem = document.querySelector("[data-imagem]").value;
    const valor = verificaValor(valorCampo);

    try {
        const produtos = await conectaApi.listaProdutos();
        const ultimoId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) : 0;
        const id = ultimoId + 1;

        const novoProduto = await conectaApi.criarProduto(id, nome, valor, imagem);
        lista.appendChild(constroiCard(novoProduto.id, novoProduto.nome, novoProduto.valor, novoProduto.imagem));

        // Limpar o formulário após o envio
        formulario.reset();
    } catch (error) {
        console.error("Erro ao criar card do produto:", error);
    }
}

formulario.addEventListener("submit", conectaApi.criarProduto({
    nome: nome,
    valor: valor,
    imagem:imagem
}));

function constroiCard(id, nome, valor, imagem) {
    const card = document.createElement("li");
    card.className = "produto__card";
    card.id = id;
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

// Carregar produtos ao inicializar a página
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const produtos = await conectaApi.listaProdutos();
        produtos.forEach(produto => {
            lista.appendChild(constroiCard(produto.id, produto.nome, produto.valor, produto.imagem));
        });
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
});



