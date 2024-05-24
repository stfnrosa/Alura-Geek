// const host = "http://localhost:3000";
const host = "https://api-produtos-seven.vercel.app"

async function listaProdutos() {
    const conexao = await fetch(`${host}/produtos`);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criarProduto(id, nome, valor, imagem) {
    const conexao = await fetch(`${host}/produtos`, { // Corrigido o template literal
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            nome: nome,
            valor: valor,
            imagem: imagem
        })
    });

    if (!conexao.ok) {
        throw new Error(`Erro na requisição: ${conexao.statusText}`);
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function atualizaProduto(id, newData) {
    const response = await fetch(`${host}/produtos/${id}`, { // Corrigido o template literal
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
    });

    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const conexaoConvertida = await response.json();
    return conexaoConvertida;
}

async function deleteProduto(id) {
    const response = await fetch(`${host}/produtos/${id}`, { // Corrigido o template literal
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    return response;
}

export const conectaApi = {
    listaProdutos,
    criarProduto,
    atualizaProduto,
    deleteProduto
};