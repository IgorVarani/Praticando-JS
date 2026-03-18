//!================
//! Nível Básico:
//!================

//* 1. Verificar maioridade.
let idadeBasico = prompt("Digite sua idade:");
if(idadeBasico >= 18)
{
    alert("De maior... Você pode ser preso.");
}
else
{
    alert("De menor... Por enquanto somente FEBEM.");
}

//* 2. Verificar se um número é positivo ou negativo.
let numeroBasico = prompt("Digite um número:");
if(numeroBasico > 0)
{
    alert("Número positivo.");
}
else
{
    alert("Número negativo.");
}

//* 3. Aprovação em uma prova.
let notaBasico = prompt("Digite a nota do aluno (0 a 100):");
if(notaBasico >= 60)
{
    alert("Aprovado!");
}
else
{
    alert("Reprovado!");
}

//* 4. Verificar se um número é positivo, negativo ou zero.
let numeroBasico2 = prompt("Digite um número:");
if(numeroBasico2 > 0)
{
    alert("Número positivo.");
}
else if(numeroBasico2 < 0)
{
    alert("Número negativo.");
}
else
{
    alert("O número é 0.");
}

//* 5. Classificação de idade.
let idadeBasico2 = prompt("Quantos anos você tem?");
if(idadeBasico2 <= 12)
{
    alert("Você é criança e não deveria estar aqui.");
}
else if(idadeBasico2 <= 17)
{
    alert("Você é adolescente, ruim pros seus pais.");
}
else
{
    alert("Você é adulto, venha trabalhar como dev também ('◡')");
}

//* 6. Verificar se um número é par ou ímpar.
let parOuImpar = prompt("Digite um número:");
if(parOuImpar %2 == 0)
{
    alert("Número par!");
}
else
{
    alert("Número ímpar!");
}

//!=======================
//! Nível Intermediário:
//!=======================

//* 1. Calculadora simples.
let numeroCalculadora1 = Number(prompt("A seguir uma calculadora básica. Digite o seu primeiro número:"));
let numeroCalculadora2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação (+, -, *, /):");

if(operacao == "+")
{
    alert(`Resultado: ${numeroCalculadora1 + numeroCalculadora2}`);
} 
else if(operacao == "-")
{
    alert(`Resultado: ${numeroCalculadora1 - numeroCalculadora2}`);
} 
else if(operacao == "*")
{
    alert(`Resultado: ${numeroCalculadora1 * numeroCalculadora2}`);
} 
else if(operacao == "/")
{
    if(numeroCalculadora2 != 0)
    {
        alert(`Resultado: ${numeroCalculadora1 / numeroCalculadora2}`);
    }
    else
    {
        alert("Erro: divisão por zero!");
    }
} 
else
{
    alert("Operação inválida.");
}

//* 2. Maior entre três números.
let numeroIntermediario1 = Number(prompt("A seguir você digitará três números. Qual o primeiro?"));
let numeroIntermediario2 = Number(prompt("E qual o segundo?"));
let numeroIntermediario3 = Number(prompt("Por fim, qual o terceiro?"));

if(numeroIntermediario1 > numeroIntermediario2 && numeroIntermediario1 > numeroIntermediario3)
{
    alert("O primeiro número é o maior.");
} 
else if(numeroIntermediario2 > numeroIntermediario1 && numeroIntermediario2 > numeroIntermediario3)
{
    alert("O segundo número é o maior.");
} 
else if(numeroIntermediario3 > numeroIntermediario1 && numeroIntermediario3 > numeroIntermediario2)
{
    alert("O terceiro número é o maior.");
}
else
{
    alert("Há empate entre os números.");
}

//* 3. Desconto em compras.
let valorCompraIntermediario = Number(prompt("Você acabou de comprar um incrível curso de responsividade do especialista Should Be, quanto o curso custou?"));
const desconto10 = valorCompraIntermediario / 10;

if(valorCompraIntermediario > 100)
{
    alert(`Você recebeu um desconto de 10%, totalizando: ${valorCompraIntermediario - desconto10}`);
}
else
{
    alert("Infelizmente você não recebeu desconto por esse valor.")
}

//* 4. Sistema de login simples.
let nomeUsuario = prompt("Você está tentando acessar a VW Resposive Tech, qual o seu nome de usuário?");
let senhaUsuario = prompt("E qual a senha?");

if(nomeUsuario == "admin" && senhaUsuario == "1234")
{
    alert("Login bem-sucedido.");
}
else
{
    alert("Acesso negado.");
}

//!==================
//! Nível Avançado:
//!==================

//* 1. Frete de pedido.
let valorCompraAvancado = Number(prompt("Você acabou de pedir um delicioso String Burguer pelo delivery da VH Burguer, quanto custou para calcularmos o frete?"));
const frete10 = 10;
const frete20 = 20;

if(valorCompraAvancado >= 100)
{
    alert(`O frete é grátis, o valor final ficou: ${valorCompraAvancado}.`);
}
else if(valorCompraAvancado >= 50)
{
    alert(`O frete será de 10 reais, o valor final ficou ${valorCompraAvancado + frete10}.`)
}
else
{
    alert(`O frete será de 20 reais, o valor final ficou ${valorCompraAvancado + frete20}.`)
}

//* 2. Acesso por idade e convite.
let idadeAvancado = Number(prompt("Você quer entrar na festa? Quantos anos você tem?"));
let temConvite = prompt("Você tem convite? (sim/não)").toLowerCase();

if(idadeAvancado >= 18 && temConvite == "não")
{
    alert("Pode entrar, mas é melhor ter um convite na próxima vez.");
} 
else if(idadeAvancado >= 18 && temConvite == "sim")
{
    alert("Pode entrar, você tem a honra da casa.");
} 
else if (idadeAvancado < 18 && temConvite == "não")
{
    alert("Sem chance garoto(a), somente com convite ou maioridade.");
} 
else if (idadeAvancado < 18 && temConvite == "sim")
{
    alert("Não é recomendado para menores, mas pode entrar.");
}