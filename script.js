let prato, bebida, sobremesa, valorPrato, valorBebida, valorSobremesa;

function selecionarPrato(item){
    if(prato != null){
        const antigo = document.querySelector(".prato .selecionado");
        antigo.classList.remove("selecionado")
    }
    prato = item.children[1].innerHTML;
    valorPrato = item.children[3].innerHTML;
    item.classList.add("selecionado");
    verifica();
}
function selecionarBebida(item){
    if(bebida != null){
        const antigo = document.querySelector(".bebida .selecionado");
        antigo.classList.remove("selecionado")
    }
    bebida = item.children[1].innerHTML;
    valorBebida = item.children[3].innerHTML;
    item.classList.add("selecionado");
    verifica();
}
function selecionarSobremesa(item){
    if(sobremesa != null){
        const antigo = document.querySelector(".sobremesa .selecionado");
        antigo.classList.remove("selecionado")
    }
    sobremesa = item.children[1].innerHTML;
    valorSobremesa = item.children[3].innerHTML;
    item.classList.add("selecionado");
    verifica();
}
function verifica(){
    if(prato != null && bebida != null && sobremesa != null){
        const botao = document.querySelector(".botao");
        botao.classList.add("botaoVerde");
        botao.innerHTML = "Fechar pedido";
    }
}

