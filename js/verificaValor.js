export default function verificaValor(campo){
    const valor = campo.value.trim(); 
    if (!valor) {    
        campo.setCustomValidity('Valor inválido. Por favor, insira um número.');
        return false; 
    }
    let valorNumerico;
    if (valor.includes(".")) {
        valorNumerico = parseFloat(valor.replace(".", ",")); 
    } else {
        valorNumerico = parseFloat(valor);
    }
    console.log(valorNumerico);
}