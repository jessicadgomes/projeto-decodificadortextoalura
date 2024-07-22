var textoDigitado = document.querySelector(".textoarea");
textoDigitado.focus();

function criptografia(){
    
    let texto = textoDigitado.value;

    let criptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "obter")
        .replace(/u/g, "ufat");
    
    
    document.querySelector(".mensagem").innerHTML = criptado;
}

function descriptografia(){

    let texto = textoDigitado.value;

    let descriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.querySelector(".mensagem").innerHTML = descriptado;
}

function copia(){
    let copiado = document.querySelector(".mensagem").value;
    navigator.clipboard.writeText(copiado);
    alert("Texto copiado com sucesso!");
}