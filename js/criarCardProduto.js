import { conectaApi } from "./conectaApi.js";
import verificaValor from "./verificaValor.js";

const formulario = document.querySelector("[data-formulario]");

async function criarCardProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valorCampo = document.querySelector("[data-valor]");
    const imagem = document.querySelector("[data-imagem]").value;
    const valor = verificaValor(valorCampo);

    const id = Date.now();

    try {
        const novoProduto = await conectaApi.criarProduto(id, nome, valor, imagem);
        document.querySelector("[data-lista]").appendChild(constroiCard(novoProduto.id, novoProduto.nome, novoProduto.valor, novoProduto.imagem));
    } catch (error) {
        console.error("Erro ao criar card do produto:", error);
    }
}

formulario.addEventListener("submit", criarCardProduto);



