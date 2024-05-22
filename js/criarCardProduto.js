import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarCardProduto(evento){
    evento.preventDefault();
    
    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value; 
    const imagem = document.querySelector("[data-imagem]").value;

    await conectaApi.criarProduto(nome, valor, imagem);
}

formulario.addEventListener("submit",evento => criarCardProduto(evento))