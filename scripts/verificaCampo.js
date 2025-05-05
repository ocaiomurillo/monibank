import validaCpf from "./validaCpf.js";
import validaIdade from "./validaIdade.js";

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
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

export default function verificaCampo(campo){
    let msg = "";
    campo.setCustomValidity('');
    if (campo.name === 'cpf'){
        if(validaCpf(campo.value)){campo.setCustomValidity("Erro");}
    } else if (campo.name === 'aniversario' && campo.value != '' ){
        if(validaIdade(campo.value)){campo.setCustomValidity("Erro");}
    }

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]){
            msg = mensagens[campo.name][erro];
        }
    })

    const msgElemento = campo.parentNode.querySelector('.mensagem-erro');
    const validadorInput = campo.checkValidity();

    if (!validadorInput){
        msgElemento.textContent = msg;
    } else {
        msgElemento.textContent = "";
    }
};
