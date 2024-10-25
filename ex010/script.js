window.onload = function(){
    const resultado = document.getElementById('resultado')
    const num = prompt('Digite o numero que voce deseja carregar o fatorial:')

    function calcularFatorial(numero) {
        if (numero < 0) {
            return "Número inválido para cálculo de fatorial";
        } else if (numero === 0 || numero === 1) {
            return 1;
        } else {
            let fatorial = 1;
            for (let i = 2; i <= numero; i++) {
                fatorial *= i;
            }
            return fatorial;
        }
    }

    resultado.textContent = `O resultado é ${calcularFatorial(num)}`
}