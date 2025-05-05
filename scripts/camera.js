const iniciarCamera = document.querySelector("[data-video-botao]");
const camera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const tirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const criarConta = document.querySelector("[data-enviar]");

let imagemURL = '';

iniciarCamera.addEventListener('click', async function () {
    const iniciarVideo = await navigator.mediaDevices
        .getUserMedia({ video: true, audio: false });

    iniciarCamera.style.display = "none";
    camera.style.display = "block";

    video.srcObject = iniciarVideo;
});

tirarFoto.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL('image/jpeg');

    camera.style.display = "none";
    mensagem.style.display = "block";
});

criarConta.addEventListener('click', () => {
    const receber = localStorage.getItem("cadastro");
    const converter = JSON.parse(receber);

    converter.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converter))

    window.location.href = '../pages/abrir-conta-form-3.html';
})