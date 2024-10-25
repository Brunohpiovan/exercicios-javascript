window.onload = function() {
    var agora = new Date();
    var horas = agora.getHours();
    var nome = window.prompt('Digite seu nome:');
    const resultado = document.getElementById('resultado');

    function boasvindas(nome, horas) {
        if (horas > 8 && horas < 12) {
            resultado.textContent = `Bom dia, ${nome}! Seja muito bem-vindo.`;
        } else if (horas >= 12 && horas < 19) {
            resultado.textContent = `Boa tarde, ${nome}! Seja muito bem-vindo.`;
        } else {
            resultado.textContent = `Boa noite, ${nome}! Seja muito bem-vindo.`;
        }
    }

    boasvindas(nome, horas);
}
