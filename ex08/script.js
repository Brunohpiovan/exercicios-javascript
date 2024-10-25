window.onload = function(){
    const resultado = document.getElementById('resultado')
    const palavra = prompt('Digite uma palavra')
    const palavraFormatada = palavra.replace(/[\W_]/g, '').toLowerCase();

    function inverterString(str) {
        // Divide a string em um array de caracteres
        let arrayDeCaracteres = str.split('');
        // Inverte a ordem dos elementos no array
        let arrayInvertido = arrayDeCaracteres.reverse();
        // Junta os elementos do array de volta em uma string
        let stringInvertida = arrayInvertido.join('');
        return stringInvertida;
    }

    function palindromo(palavra){
        return palavra == inverterString(palavra)
    }

    if(palindromo(palavraFormatada)){
        resultado.textContent = 'Essa palavra é um palindromo'
    }else{
        resultado.textContent = 'Essa palavra não é um palindromo'
    }
}