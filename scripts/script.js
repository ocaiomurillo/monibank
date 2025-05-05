import verificaCampo from "./verificaCampo.js";
const form = document.querySelectorAll('[required]');
const formResposta = document.querySelector('[data-formulario]');

form.forEach((campo) => {
    campo.addEventListener("blur", (evento) => verificaCampo(campo));
    campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

formResposta.addEventListener("submit", (e)=> {
    e.preventDefault();

    const resposta = {
        "nome" : e.target.elements['nome'].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value
    };

    localStorage.setItem("cadastro", JSON.stringify(resposta));

    window.location.href = "./abrir-conta-form-2.html"

});

