window.onload = function(){
    const resultado = document.getElementById('resultado')
    var num = parseFloat(prompt('Digite um numero para converte-lo para binario:'))

    function binario(numero){
        return numero.toString(2)
    }

    resultado.textContent = `O numero ${num} tem representação binaria igual a ${binario(num)}`

}