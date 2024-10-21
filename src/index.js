const button = document.getElementById("button-calcular"); //abrir
const modal = document.getElementById("dialog");
const buttonClose = document.getElementById("button-fechar")


button.onclick = function (){
    modal.showModal();
}

buttonClose.onclick = function (){
    modal.close();
}