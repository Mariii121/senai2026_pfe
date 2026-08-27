function calcular(num1, num2, operacao) {
    switch (operacao) {
        case '+':
            console.log('Resultado: ' + (num1 + num2));
            break;
        case '-':
            console.log('Resultado: ' + (num1 - num2));
            break;
        case '*':
            console.log('Resultado: ' + (num1 * num2));
            break;
        case '/':
            if (num2 === 0) {
                console.log('Erro: divisão por zero');
            } else {
                console.log('Resultado: ' + (num1 / num2));
            }
            break;
        default:
            console.log('Operação inválida');
    }
}

calcular(10, 5, '*');

