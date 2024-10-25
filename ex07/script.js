window.onload = function(){
    const resultado = document.getElementById('resultado')
    var num = prompt('Informe um numero:')
    var porcentagem =prompt('Informe uma porcentagem:')

    function calculo(numero,porcentagem){ 
        num = parseFloat(numero)
        porcentagem = parseFloat(porcentagem)
        return num + (num*porcentagem/100)
    }

    resultado.textContent = `O valor acrescido da porcentagem informado é igual a ${calculo(num,porcentagem)}`

}