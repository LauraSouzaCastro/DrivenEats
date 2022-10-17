let prato, bebida, sobremesa, valorPrato, valorBebida, valorSobremesa, verifica, precoTotal, valorTotal, valorBebidaConvertidoNumber, valorPratoConvertidoNumber, valorSobremesaConvertidoNumber;

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
function converteVirgula(valor){
    valor = valor.toFixed(2);
    valor += "";
    let preco = "";
    for(let i = 0; i < valor.length; i++){
        if(valor[i] == "."){
            preco += ",";
        }else{
            preco += valor[i];
        }
    }
    return preco;
}
function confirmarPedido(){
    if(verifica != null){
        const divConfima = document.querySelector(".some");
        divConfima.classList.remove("some");
        const infoPrato = document.querySelector(".infoPrato");
        const infoBebida = document.querySelector(".infoBebida");
        const infoSobremesa = document.querySelector(".infoSobremesa");
        const infoTotal = document.querySelector(".infoTotal");
        valorPratoConvertidoNumber = converte(valorPrato);
        valorBebidaConvertidoNumber = converte(valorBebida);
        valorSobremesaConvertidoNumber = converte(valorSobremesa);
        valorTotal =  (valorPratoConvertidoNumber + valorBebidaConvertidoNumber + valorSobremesaConvertidoNumber);
        infoPrato.children[0].innerHTML = prato;
        infoPrato.children[1].innerHTML = converteVirgula(valorPratoConvertidoNumber);
        infoBebida.children[0].innerHTML = bebida;
        infoBebida.children[1].innerHTML = converteVirgula(valorBebidaConvertidoNumber);
        infoSobremesa.children[0].innerHTML = sobremesa;
        infoSobremesa.children[1].innerHTML = converteVirgula(valorSobremesaConvertidoNumber);
        infoTotal.children[1].innerHTML = `R$ ${converteVirgula(valorTotal)}`;
    }  
}
function finalizarPedido(){
    if(verifica != null){
        precoTotal = converteVirgula(valorTotal);
        let nome = prompt("Qual é o seu nome?");
        let endereco = prompt("Qual é o seu endereco?");
        let minhaString = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${precoTotal}\n\nNome: ${nome}\nEndereço: ${endereco}`;
        window.location.href = `https://wa.me/5562994174964?text=${encodeURIComponent(minhaString)}`;
    }
}
function cancelar(){
    const divConfima = document.querySelector(".fundo");
    divConfima.classList.add("some");
}