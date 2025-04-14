let valorCompra = parseFloat(prompt("Qual o valor da sua compra?")); //Essa variável armazena o valor da compra.
let valorDesconto = (valorCompra*0.1);
let valorTotal = (valorCompra - valorDesconto);

if (isNaN(valorCompra)) {
    alert('Erro: Você não digitou um número válido');
}
//Verifica se a conversão em um número válido

if (valorCompra >=100) {
    alert(`Você ganhou 10% de desconto pela sua compra! :) ${valorTotal}.`);
}
//Verifica se o valor da compra está dentro do desconto.

else{ 
    alert(`O valor da sua compra é menor que 100 reais. O valor da compra é ${valorCompra} reais.`);
    
}
//Verifica se o valor da compra é válido para o desconto.
