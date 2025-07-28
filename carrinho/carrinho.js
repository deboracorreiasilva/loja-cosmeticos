var removerProdutos = document.getElementsByClassName("remover")

for (var i = 0; i < removerProdutos.length; i++){
removerProdutos[i]. addEventListener("click", removerProduto)
}

var inputs = document.getElementsByClassName("qtd")
for(var i = 0; i < inputs.length; i++){
inputs[i].addEventListener("change", subtotal)
}
function removerProduto(event){
event.target.parentElement.parentElement.remove()
subtotal()

}
function finalizarCompra() {
const popup = document.getElementById("popup");
popup.style.display = "block";

setTimeout(() => {
popup.style.display = "none";
}, 3000);

}

function calcula_frete(distancia_km){
	distancia_media = 1108;
	distancia_max = 3038;

	if (distancia_km > distancia_media && distancia_km <= distancia_max){
		distancia_km = distancia_km/2;
	}else{
		if (distancia_km > distancia_max){
			distancia_km = distancia_km/3;
		}
	};
	
	var taxa_base = 10;
	var taxa_km = 0.05;
	var preco_frete = taxa_base + (distancia_km * taxa_km);
	return preco_frete;
};

/* Aqui tá calculando o subtotal, usando a função de frete e calculando o total da compra*/
function subtotal(){ /*escolher um nome descente pra função*/

	var totalProdutos = 0
	var produtos = document.getElementsByClassName("produto")

	for(var i = 0; i < produtos.length; i++){
		var precoProduto = produtos[i].getElementsByClassName("preco")[0].innerText.replace("R$","").replace(",",".")
		var qtdProduto = produtos[i].getElementsByClassName("qtd")[0].value
		totalProdutos += precoProduto * qtdProduto
	}
	
	/*var valor_frete = calcula_frete(807); //valor provisório*/
	
	var valor_frete = calcula_frete(807);

	var total_compra = valor_frete + totalProdutos;

	total_compra = total_compra.toFixed(2)
	total_compra = total_compra.replace(".",",")
	document.querySelector("#total_compra span").innerHTML = "R$ " + total_compra

	totalProdutos = totalProdutos.toFixed(2)
	totalProdutos = totalProdutos.replace(".",",")
	document.querySelector(".subtotal span").innerText = "R$ " + totalProdutos

	valor_frete = valor_frete.toFixed(2);
	valor_frete = valor_frete.replace(".",",");
	document.querySelector("#frete span").innerHTML= "R$ " + valor_frete;
}