let verifica = document.querySelector('.btn-verifica');
let resultado = document.querySelector('#principal');
let respostaSaida = document.querySelector('.resposta-saida');
let entradaTexto = document.querySelector('#entrada-texto');

verifica.onclick = function (palavra) {
    palavra = document.getElementById('entrada-texto').value.toLowerCase();
    if (palavra.trim() === '' || !/^[a-zA-Z]+$/.test(palavra)) {
        alert('Informe uma palavra válida para verificar! Somente letras!');
    } else {
    let separarAsLetrasDaPalavra = palavra.split("");
    let palavraInvertida = separarAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");
    respostaSaida.style.display = 'block';

        if (palavra === palavraInvertida) {            
            respostaSaida.innerHTML = 'É um palíndromo';
            respostaSaida.style.color = 'darkblue';

        } else {
            respostaSaida.innerHTML = 'Não é um palíndromo';
            respostaSaida.style.color = 'darkred';
        }

    }
}

let limpar = document.querySelector('.btn-limpar');

 limpar.onclick = function () {
     entradaTexto.value = '';
     respostaSaida.style.display = 'none';
 }

