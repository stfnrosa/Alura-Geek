//função usada para listar os produtos da API
async function listaProdutos() {
    const conexao = await fetch('http://localhost:3000/produtos');
    //converte o resultado da requisição para JSON
    const conexaoConvertida = await conexao.json();
    //retorna o array de produtos da Api
    return conexaoConvertida;
}

async function criarProduto(id, nome, valor, imagem) {
    const conexao = await fetch('http://localhost:3000/produtos', {
        method: "POST",
        //indica que o corpo da requisição está no formato JSON
        headers: {
            "Content-type": "application/json"
        },
        //converte todos os dados em uma string JSON
        body: JSON.stringify({
            id: id,
            nome: nome,
            valor: valor,
            imagem: imagem
        })
    });

    //verifica se a requisição foi bem sucedida
    if (!conexao.ok) {
        throw new Error(`Erro na requisição: ${conexao.statusText}`);
    }

    //converte o resultado da requisição para JSON
    const conexaoConvertida = await conexao.json();
    //retorna o produti criado em JSON
    return conexaoConvertida;
}

async function atualizaProduto(id, newData) {
    const response = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
    });
    return response;
}

// async function deleteProduto(id) {
//     //realiza uma requisiçaõ delete
//     const response = await fetch(`http://localhost:3000/produtos/${id}`, {
//         method: 'DELETE',
//     });
//     return response;
// }

//exporta funções definidas
export const conectaApi = {
    listaProdutos,
    criarProduto,
    atualizaProduto
}
