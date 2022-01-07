'use strict';

function calcularImc(){
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');
    

    if (nome === '' || altura === '' || peso === ''){
        resultado.textContent = 'Preencha todos os campos!';
    }else{
        const imc = peso / (altura * altura);
        let mensagem = '';

         if(imc < 18.5){
            mensagem = 'e voce está abaixo do peso';
         }else if( imc < 25){
            mensagem = 'voce está no peso ideal. <div class="verde"> Parabéns!!!</div>';
         }else if(imc < 30){
            mensagem = 'Levemente acima do peso!';
         }else if(imc < 35){
            mensagem = 'Com obesidade grau I';
         }else if(imc < 40){
            mensagem = 'Com obesidade grau II';
         }else{
            mensagem = 'com obesidade grau III. <div class="vermelho"> Cuidado!!!</div>';
         }
        resultado.innerHTML = `${nome}  seu imc é: ${ imc.toFixed(2)} ${mensagem}`
    }
}

document.getElementById('calcular').addEventListener('click',calcularImc);