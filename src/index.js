// modal desconto
const btnModal = document.getElementById("button-calcular"); //abrir
const modal = document.getElementById("modal");
const btnModalClose = document.getElementById("button-fechar")


btnModal.onclick = function (){
    modal.showModal();
}

btnModalClose.onclick = function (){
    modal.close();
}

//modal2 - sim
const btnModal2 = document.getElementById("button-sim");
const modal2 = document.getElementById("modal2");
const btnModal2Close = document.getElementById("bt-fechar-modal2");

btnModal2.onclick = function(){
    modal2.showModal();
    modal.close();
}

btnModal2Close.onclick = function (){
    modal2.close();
}

//
//modal2 - nao
const btnModal3 = document.getElementById("button-nao");
const modal3 = document.getElementById("modal3");
const btnModal3Close = document.getElementById("bt-fechar-modal3");

btnModal3.onclick = function(){
    modal3.showModal();
    modal.close();
}

btnModal3Close.onclick = function (){
    modal3.close();
}
