window.onload = function(){
    const resultado = document.getElementById('resultado')
    const string = prompt('Informe a palavra que seja inverter: ')

    function inverterString(str) {
        // Divide a string em um array de caracteres
        let arrayDeCaracteres = str.split('');
        // Inverte a ordem dos elementos no array
        let arrayInvertido = arrayDeCaracteres.reverse();
        // Junta os elementos do array de volta em uma string
        let stringInvertida = arrayInvertido.join('');
        return stringInvertida;
    }

    resultado.textContent = `${inverterString(string)}`
}