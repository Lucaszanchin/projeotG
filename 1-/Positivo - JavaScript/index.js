let numAleat = prompt("Insira o número que você deseja"); //Essa variável armazena o número que o usuário deseja.

if (isNaN(numAleat)) {
    //Verifica se a conversão em um número válido
    alert('Erro: Você não digitou um número válido');
}

if (numAleat >0) {
    //Verifica se é um número positivo
    alert('O número que você digitou é positivo.');
}

if (numAleat <0) {
    //Verifica se é um número negativo
    alert('O número que você digitou não é positivo.');
}