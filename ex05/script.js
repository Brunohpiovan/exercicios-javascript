window.onload = function(){
    const resultado = document.getElementById('resultado')
    const num = prompt('Digite um numero para verificar se ele é primo ou nao:')

    function Primo(numero){
        if (numero <= 1) {
            return false; 
        }
        
        
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return false; 
            }
        }
        
        return true; 
    }

    if(Primo(num)){
        resultado.textContent = 'O numero digitado é primo.'
    }else{
        resultado.textContent = 'O numero digitado não é primo.'
    }
}