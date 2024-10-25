window.onload = function(){
    var num = window.prompt('Digite um numero para verificar se é impar ou par:')
    const resultado = document.getElementById('resultado')

    function verificaNum(num){
        if(num%2==0){
            return true;
        }else{
            return false;
        }
    }
    if(verificaNum(num)){
        resultado.textContent = `Esse número é par`
    }else{
        resultado.textContent = 'Esse número é impar'
    }
}