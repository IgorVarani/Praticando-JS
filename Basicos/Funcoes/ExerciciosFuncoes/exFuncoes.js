//!================
//! Nível Básico:
//!================

//* 1. Lista numerada.
let nomes = ["Ana", "Carlos", "João", "Maria", "Lucas"];

nomes.forEach((nome, index) =>
{
  console.log(`${index} - ${nome}`);
});

//* 2. Exibir posições.
let cores = ["Azul", "Vermelho", "Verde", "Amarelo"];

cores.forEach((cor, index) =>
{
  console.log(`A cor ${cor} está na posição ${index}`);
});

//* 3. Primeiro e último.
let valores = [10, 20, 30, 40, 50];

let primeiro = valores[0];
let ultimo = valores[valores.length - 1];

console.log("Primeiro:", primeiro);
console.log("Último:", ultimo);

//* 4. Contagem de itens.
let frutas = ["Maçã", "Banana", "Uva", "Laranja"];

console.log(`Quantidade de frutas: ${frutas.length}`);

//!=======================
//! Nível Intermediário:
//!=======================

//* 1. Filtrar por posição.
let numeros = [10, 15, 20, 25, 30, 35];

let paresIndice = numeros.filter((numero, index) => index % 2 === 0);

console.log(paresIndice);

//* 2. Destacar item específico.
let nomesNovos = ["Ana", "Carlos", "João", "Maria"];

nomesNovos.forEach((nome, index) =>
{
  if (index === 2)
{
    console.log(`Nome especial: ${nome}`);
}
else
{
    console.log(nome);
}
});

//* 3. Transformar com índice.
let numerosNovos = [10, 20, 30];

let formatados = numerosNovos.map((numero, index) =>
{
  return `${index + 1}º número: ${numero}`;
});

console.log(formatados);

//* 4. Verificar posição.
let produtos = ["Mouse", "Teclado", "Monitor", "Notebook", "Headset"];

let apos2 = produtos.filter((produto, index) => index > 2);

console.log(depoisDo2);

//* 5. Buscar com condição.
let numerosCondicao = [10, 25, 60, 40, 80];

let maiorQ50 = numerosCondicao.find(numero => numero > 50);

console.log(maiorQ50);

//!==================
//! Nível Avançado:
//!==================

//* 1. Ranking simples.
let nomesRanking = ["Ana", "Carlos", "João", "Maria"];

let ranking = nomesRanking.map((nome, index) =>
{
  return `${index + 1}º Lugar: ${nome}`;
});

console.log(ranking);

//* 2. Separar por posição.
let numerosSeparados = [10, 20, 30, 40, 50, 60];

let pares = numerosSeparados.filter((num, index) => index % 2 === 0);
let impares = numerosSeparados.filter((num, index) => index % 2 !== 0);

console.log("Pares: ", pares);
console.log("Ímpares: ", impares);

//* 3. Montar frase.
let palavras = ["JavaScript", "é", "muito", "top"];

let frase = palavras.join(" ");

console.log(frase);

//* 4. Buscar e mostrar posição.
let nomesPosicao = ["Ana", "Carlos", "João", "Maria"];

let busca = prompt("Digite um nome: ");

let posicao = nomesPosicao.indexOf(busca);

if (posicao !== -1)
{
  console.log(`O nome está na posição ${posicao}`);
}
else
{
  console.log("Nome não encontrado.");
}

//* 5. Marcar itens.
let tarefas = ["Estudar JS", "Fazer exercício", "Revisar código"];

let lista = tarefas.map((tarefa, index) =>
{
  return `[ ] tarefa ${index + 1} - ${tarefa}`;
});

console.log(lista);