import { conectaApi } from "./conectaApi.js";
import verificaValor from "./verificaValor.js";

const formulario = document.querySelector("[data-formulario]");
const lista = document.querySelector("[card-list]");

function criarCardProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valorCampo = document.querySelector("[data-valor]");
    const imagem = document.querySelector("[data-imagem]").value;
    const valor = verificaValor(valorCampo);

    const id = Date.now();

    conectaApi.criarProduto().the(produtos => {
        if(produtos.legth === 0){
            location.reload();
        }else {
            lista.innerHTML = ``;
            produtos.reverse();
             produtos.forEach(elemento=> lista.appendChil(constroiCard(novoProdutoid, novoProduto.nome,novoProduto.valor,novoProduto.imagem)))
        }
    })
    } catch (error) {
        console.error("Erro ao criar card do produto:", error);
    }
}

formulario.addEventListener("submit", criarCardProduto);

