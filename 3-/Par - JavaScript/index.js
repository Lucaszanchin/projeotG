let numAleato = prompt("Insira o número que você deseja"); //Essa variável armazena o número desajado.

if (isNaN(numAleato)) {
    alert('Erro: Você não digitou um número válido');
}
//Verifica se a conversão em um número válido.

if (numAleato % 2 == 0) {
    alert('O número que você escolheu é par.');
}
//Verifica se o número que o usuário escolheu é par.

else {
    alert('O número que você escolheu é par, ele é ímpar.');
    
}
//Verifica se o número escolhido é ímpar.