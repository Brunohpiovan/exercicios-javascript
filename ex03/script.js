window.onload = function(){
    const resultado = document.getElementById('resultado')
    const input = prompt('Digite os números separados por espaço:');
    const numeros = input.split(' ').map(Number);

    function mediaNum(numeros){
        const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        return soma / numeros.length;
    }
    resultado.textContent = `A média dos numeros é ${mediaNum(numeros)}`
}

