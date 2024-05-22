async function deleteProduto(id) {
    //realiza uma requisiçaõ delete
    const response = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE',
    });
    return response;
}

export const removerProduto = {
    deleteProduto
}