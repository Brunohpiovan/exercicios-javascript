window.onload = function(){
    const resultado = document.getElementById('resultado')
    const input = prompt('Digite os números separados por espaço:');
    const numeros = input.split(' ').map(Number);

    function somaPar(numeros){
        var soma = 0 
        for(let i=0;i<=numeros.length;i++){
            if(i%2 == 0){
                soma+=numeros[i];
            }
        }
        return soma
    }

    resultado.textContent = `O resultado da soma dos elementos de posicao par no array é igual a ${somaPar(numeros)}`
}