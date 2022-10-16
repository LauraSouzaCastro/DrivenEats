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
function finalizarPedido(){
    if(verifica != null){
        let valorPratoConvertido = ""; 
        let valorBebidaConvertido = "";
        let valorSobremesaConvertido = "";
        for(let i = 3; i < valorPrato.length; i++){
            if(valorPrato[i] == ","){
                valorPratoConvertido += ".";
            }else{
                valorPratoConvertido += valorPrato[i];
            }
        }
        for(let i = 3; i < valorBebida.length; i++){
            if(valorBebida[i] == ","){
                valorBebidaConvertido += ".";
            }else{
                valorBebidaConvertido += valorBebida[i];
            }
        }
        for(let i = 3; i < valorSobremesa.length; i++){
            if(valorSobremesa[i] == ","){
                valorSobremesaConvertido += ".";
            }else{
                valorSobremesaConvertido += valorSobremesa[i];
            }
        }
        let valorPratoConvertidoNumber = Number(valorPratoConvertido);
        let valorBebidaConvertidoNumber = Number(valorBebidaConvertido);
        let valorSobremesaConvertidoNumber = Number(valorSobremesaConvertido);
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
        let minhaString = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${precoTotal}`;
        window.location.href = `https://wa.me/5562996330374?text=${encodeURIComponent(minhaString)}`;
    }
}

