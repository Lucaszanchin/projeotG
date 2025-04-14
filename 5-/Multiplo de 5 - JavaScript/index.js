let numAleatorio = prompt("Insira o número que você deseja"); //Essa variável armazena o número desejado.

if (isNaN(numAleatorio)) {
    alert('Erro: Você não digitou um número válido');
}
//Verifica se a conversão em um número válido

if (numAleatorio %5==0) {
    alert('O número que você escolheu é um multiplo de 5.');
}
//Verifica se o número é multiplo de 5.

else{ 
    alert('O número que você não é multiplo de 5.');
    
}
//Verifica se o número não é multiplo de 5