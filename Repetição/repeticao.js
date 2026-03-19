//! Tipos:
//* FOR, WHILE, DO WHILE e FOREACH.

//! FOR --> Quando sabe-se quantas vezes o código repetirá-se.
//* Explicação --> let i = 1; i <= 5; i++
//* let i = 1 | criou-se uma variável que foi batizada de "i". Essa variável servirá como estado inicial da estrutura de repetição.
//* Conforme for repetindo, ela vai aumentando de valor.

//* i <= 5 | CONDIÇÃO --> vai definir o limite de repetições, ou seja, enquanto "i" for menor ou igual ao 5.

//* i++ | ITERADOR --> quando usa-se o ++, quer dizer que acrescenta-se +1 dentro do 1. | i++ é a mesma coisa que i = i +1
for(let i = 1; i <= 5; i++)
{
    console.log("Oi!!!");
    console.log("Número: ", i);
}
//* Acima temos um simples for que fará o "Oi!!!" rodar exatamente 5x.

//! WHILE --> Executa o bloco do código enquanto uma condição for verdadeira.
let contador = 1;

while(contador <= 3)
{
    console.log("Repetindo...");
    contador++ // <-- contador = contador +1
}
//* Acima contador é menor ou igual a 3? verdadeiro.
//* Imprime e faz contador = contador +1 | contador = 1 +1 --> contador agora vale 2.

//* Acima contador é menor ou igual a 3? falso.
//* Não imprime e nem faz nada.

//! DO WHILE --> Executa pelo menos uma vez antes da condição. Executa, depois pergunta.
let numero = 5;

do
{
    console.log("Executou pelo menos uma vez.");
}
while(numero < 3); // <-- false

//* Diferença entre "While" para o "Do While" é que o While pergunta e somente após executa, o Do While executa e depois pergunta.
while(numero < 3)
{
    console.log("Executou aqui.");
    numero++;
}

//! FOREACH --> Usa-se para quando temos uma lista de elementos e queremos percorrer os elementos dessa lista.
//* Lista = "Array"
let nomes = ["Maria Eduarda", "Kauê", "Lailon"];

//* forEach = paraCada
nomes.forEach(function(nome)
{
    console.log("Nome: ", nome);
    console.log(nome[1]); // <-- Imprime o nome na posição 1.
})

//* Sistema de intervalo definido pelo usuário.
let inicio = Number(promtp("Digite o número inicial: "));
let fimc = Number(prompt("Digite o número final: "));

for(let i = inicio; i <= fim; i +=5)
{
    console.log(i);
}
//* ++ --> Soma mais um.
//* +=n --> Soma mais n (numero)

//! Contagem pulando números.
for(let i = 0; i <= 10; i +=2)
{
    console.log(i);
}

//! While com condição para sair do sistema.
let valor = "";
while(valor != "sair")
{
    valor = prompt("Digite algo ou 'sair' para parar");
    console.log("Você digitou: ", valor);
}

//! Contador com regra.
let limite = Number(prompt("Mostrar números maiores que: "));

for(let i = 1; i <= 10; i++)
{
    if(i < limite)
    {
        console.log(i);
    }
}

//! Percorrendo um "Array" usando "For".
let cores = ["Azul", "Verde", "Vermelho"];
//* Tamanho 3, posição (índice) começa em zero --> vai de 0 a 2.
//* Length --> tamanho (pega o tamanho do array(lista))
for(let i = 0; i < cores.length; i++)
{
    console.log("Posição da cor: " + i + "-" + cores[i]);
}
//* i --> Imprime número da posição. | cores[i] --> Imprime a cor da posição.

//! Condição dentro do forEach.
let numeros = [3, 7, 10, 15];

numeros.forEach(num =>
{
    if(num > 8)
    {
        console.log("Maior que 8: ", num);
    }
})