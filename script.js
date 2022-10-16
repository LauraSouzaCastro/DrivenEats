let prato, bebida, sobremesa, valorPrato, valorBebida, valorSobremesa, verifica;

function selecionarPrato(item){
    if(prato != null){
        const antigo = document.querySelector(".prato .selecionado");
        antigo.classList.remove("selecionado")
    }
    prato = item.children[1].innerHTML;
    valorPrato = item.children[3].innerHTML;
    item.classList.add("selecionado");
    verificar();
}
function selecionarBebida(item){
    if(bebida != null){
        const antigo = document.querySelector(".bebida .selecionado");
        antigo.classList.remove("selecionado")
    }
    bebida = item.children[1].innerHTML;
    valorBebida = item.children[3].innerHTML;
    item.classList.add("selecionado");
    verificar();
}
function selecionarSobremesa(item){
    if(sobremesa != null){
        const antigo = document.querySelector(".sobremesa .selecionado");
        antigo.classList.remove("selecionado")
    }
    sobremesa = item.children[1].innerHTML;
    valorSobremesa = item.children[3].innerHTML;
    item.classList.add("selecionado");
    verificar();
}
function verificar(){
    if(prato != null && bebida != null && sobremesa != null){
        const botao = document.querySelector(".botao");
        botao.classList.add("botaoVerde");
        botao.innerHTML = "Fechar pedido";
        verifica = 1;
    }
}
function converte(valorString){
    let valorConvertido = "";
    for(let i = 3; i < valorString.length; i++){
        if(valorString[i] == ","){
            valorConvertido += ".";
        }else{
            valorConvertido += valorString[i];
        }
    }
    return Number(valorConvertido);
}
function finalizarPedido(){
    if(verifica != null){
        let valorPratoConvertidoNumber = converte(valorPrato);
        let valorBebidaConvertidoNumber = converte(valorBebida);
        let valorSobremesaConvertidoNumber = converte(valorSobremesa);
        let valorTotal =  (valorPratoConvertidoNumber + valorBebidaConvertidoNumber + valorSobremesaConvertidoNumber).toFixed(2);
        valorTotal += "";
        let precoTotal = "";
        for(let i = 0; i < valorTotal.length; i++){
            if(valorTotal[i] == "."){
                precoTotal += ",";
            }else{
                precoTotal += valorTotal[i];
            }
        }
        let nome = prompt("Qual é o seu nome?");
        let endereco = prompt("Qual é o seu endereco?");
        let minhaString = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${precoTotal}\n\nNome: ${nome}\nEndereço: ${endereco}`;
        window.location.href = `https://wa.me/5562996330374?text=${encodeURIComponent(minhaString)}`;
    }
}