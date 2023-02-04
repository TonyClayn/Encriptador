function myFunction() {
    document.getElementById("caja1").style.display = "none";
    document.getElementById("caja2").style.display = "inline";
}

function encriptar(){
    var text = document.getElementById("textoEncriptar").value;
    n = 0;
    while(n<6){
        if(n==0){
            text = text.replaceAll("e", "enter");
            n++
        }
        if(n==1){
            text = text.replaceAll("i", "imes");
            n++
        }
        if(n==2){
            text = text.replaceAll("a", "ai");
            n++
        }
        if(n==3){
            text = text.replaceAll("o", "ober")
            n++
        }
        if(n==4){
            text = text.replaceAll("u", "ufat")
            n++
        }
        if(n==5){
            document.getElementById("mensajeEncriptado").value = text;
            n++
        }
    }
    document.getElementById("textoEncriptar").value = "";
}

function desencriptar() {
    var text = document.getElementById("textoEncriptar").value;
    n = 0;
    while (n < 6) {
        if (n == 0) {
            text = text.replaceAll("enter", "e");
            n++
        }
        if (n == 1) {
            text = text.replaceAll("imes", "i");
            n++
        }
        if (n == 2) {
            text = text.replaceAll("ai", "a");
            n++
        }
        if (n == 3) {
            text = text.replaceAll("ober", "o")
            n++
        }
        if (n == 4) {
            text = text.replaceAll("ufat", "u")
            n++
        }
        if (n == 5) {
            document.getElementById("mensajeEncriptado").value = text;
            n++
        }
    }
    document.getElementById("textoEncriptar").value = "";
}

function copiar(){
    var content = document.getElementById('mensajeEncriptado');

    content.select();
    document.execCommand('copy');
}