let numIdade = prompt("Insira a sua idade"); //Essa variável armazena a idade do usuário

if (isNaN(numIdade)) {
    //Verifica se a conversão em um número válido
    alert('Erro: Você não digitou um número válido');
}

if (numIdade > 18) {
    //Verifica se a pessoa é maior de idade
    alert('Você é maior de idade.');
}

if (numIdade < 18) {
    //Verifica se a pessoa não é maior de idade
    alert('Você não é maior de idade, você é menor de idade.');
}