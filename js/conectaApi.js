// const host = "http://localhost:3000";
const host = "https://api-produtos-seven.vercel.app"

// Função usada para listar os produtos da API
async function listaProdutos() {
    const conexao = await fetch(`${host}/produtos`);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criarProduto(produto) {
    const response = await fetch(`${host}/productos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(produto)
    });
    return response;
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
