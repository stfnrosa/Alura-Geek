
const  camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => vericaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    valor: {
        valueMissing: "O campo de valor não pode estar vazio.",
        patternMismatch: "Por favor, preencha um valor válido.",
        tooShort: "Por favor, preencha um valor válido."
    },
    imagem: {
        valueMissing: "O campo de imagem não pode estar vazio.",
        patternMismatch: "Por favor, preencha uma  imagem válido.",
        tooShort: "Por favor, preencha uma imagem válido."
    }
}

function vericaCampo(campo){
    let mensagem = "";

    tiposDeErro.forEach(erro => {
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem)
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput){
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}