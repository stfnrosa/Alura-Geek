import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarCardProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    const id = Date.now();

    try {
        const novoProduto = await conectaApi.criarProduto(id, nome, valor, imagem);
        document.querySelector("[data-lista]").appendChild(constroiCard(novoProduto.id, novoProduto.nome, novoProduto.valor, novoProduto.imagem));
    } catch (error) {
        console.error("Erro ao criar card do produto:", error);
    }
}

formulario.addEventListener("submit", criarCardProduto);

