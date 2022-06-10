const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");


function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage = "none";
}

function btnDesencripitar(){
    const textoEncriptado = desencripitar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage = "none";
}


function btnCopiar() {

    let texto = document.getElementById('textoResolvido');
    texto.select();
    document.execCommand('copy');

}
let matrizEncripitar = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"],["u", "ufat"]];
let matrizDesencriptar = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"],["ufat", "u"]];

function encriptar(strigEncriptada){
    strigEncriptada = strigEncriptada.toLowerCase();

    for (let i=0; i<matrizEncripitar.length; i++){
        if(strigEncriptada.includes(matrizEncripitar[i][0])){
            var encriptado = strigEncriptada.replaceAll(matrizEncripitar[i][0], matrizEncripitar[i][1])
        }
    }
    return encriptado;
}

function desencripitar(strigDesencripitada){
    strigDesencripitada = strigDesencripitada.toLowerCase();

    for (let i=0; i<matrizDesencriptar.length; i++){
        if(strigDesencripitada.includes(matrizDesencriptar[i][0])){
            var decripitado = strigDesencripitada.replaceAll(matrizDesencriptar[i][0], matrizDesencriptar[i][1])
        }
    }
    return decripitado
}


