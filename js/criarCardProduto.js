import { conectaApi } from "./conectaApi.js";
import verificaValor from "./verificaValor.js";

const formulario = document.querySelector("[data-formulario]");
const lista = document.querySelector("[card-list]");

async function criarCardProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valorCampo = document.querySelector("[data-valor]");
    const imagem = document.querySelector("[data-imagem]").value;
    const valor = verificaValor(valorCampo);

    const id = Date.now();

    try{
        await conectaApi.criarProduto(id, nome, valor, imagem);
        lista.appendChild(constroiCard(novoProduto.id, novoProduto.nome,novoProduto.valor,novoProduto.imagem)))
    } 
}
   
formulario.addEventListener("submit", criarCardProduto);

