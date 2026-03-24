let numero = 0;

const contador = document.getElementById("contador");
const botao = document.getElementById("botao");

botao.addEventListener("click", function()
{
    numero++; // Aumenta em 1.
    contador.innerText = numero; // Atualiza a tela para o número atual.
});