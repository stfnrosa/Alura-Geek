export default function verificaValor(campo) {
    const valor = campo.value.trim(); 
    if (!valor) {    
        campo.setCustomValidity('Valor inválido. Por favor, insira um número.');
        return null; 
    }
    let valorNumerico;
    if (valor.includes(".")) {
        valorNumerico = parseFloat(valor.replace(".", ","));
    } else {
        valorNumerico = parseFloat(valor);
    }

    if (isNaN(valorNumerico)) {
        campo.setCustomValidity('Valor inválido. Por favor, insira um número.');
        return null;
    }

    campo.setCustomValidity('');
    return valorNumerico.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
