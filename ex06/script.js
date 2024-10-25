window.onload = function(){
    const resultado = document.getElementById('resultado')
    const input = prompt('Digite os elementos separados por espaço:');
    const elementos = input.split(' ').map(String);

    function inverterArray(array) {
        return array.reverse();
    }

    resultado.textContent = `${inverterArray(elementos)}`
}