window.onload = function(){
    const resultado = document.getElementById('resultado')
    var string = prompt('Digite uma frase: ');

    function caixaAlta(string){
        return string.toUpperCase();
    }

    resultado.textContent = `${caixaAlta(string)}`
}