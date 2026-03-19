//!================
//! Nível Básico:
//!================

//* 1. Contagem de 1 a 10.
for (let i = 1; i <= 10; i++)
{
    console.log(i);
}

//* 2. Tabuada de um número.
let numero = 4;

for (let i = 1; i <= 10; i++)
{
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

//* 3. Soma dos primeiros N números naturais.
let n = 4;
let soma = 0, i;

for (let i = 1; i <= n; i++)
{
    soma += i;
}

console.log(soma);

//!=======================
//! Nível Intermediário:
//!=======================

//* 1. Exibir os números pares de 1 a 50.
for (let i = 1; i <= 50; i++)
{
    if (i % 2 === 0)
    {
        console.log(i);
    }
}

//* 2. Jogo de Adivinhação.
function gerarNumAleatorio(min, max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroSecreto = gerarNumAleatorio(1, 100);

let chute = Number(prompt("Estou pensando em um número de 1 a 100, qual será?"));

while (chute !== numeroSecreto) 
{
    if (chute > numeroSecreto) 
    {
        alert("Muito alto!");
        console.log("Muito alto!");
    }
    else if (chute < numeroSecreto)
    {
        alert("Muito baixo!");
        console.log("Muito baixo!");
    }

    chute = Number(prompt("Tente novamente:"));
}

alert("Acertou!");
console.log("Acertou!");

//* 3. Contagem regressiva.
let numeroContagem = Number(prompt("Digite um número para começar a contagem regressiva:"));

while (numero >= 0)
{
    console.log(numero);
    numero--;
}

//* 4. Validação de senha.
let senhaCorreta = "1234";
let senha = prompt("Digite a senha:");

while (senha !== senhaCorreta)
{
    alert("Senha incorreta!");
    senha = prompt("Tente novamente:");
}

alert("Acesso liberado!");

//* 5. Soma até parar.
let somaAteParar = 0;
let numeroAteParar = Number(prompt("Digite um número (0 para parar):"));

while (numero !== 0)
{
    soma += numero;
    numero = Number(prompt("Digite outro número (0 para parar):"));
}

console.log("Total:", soma);