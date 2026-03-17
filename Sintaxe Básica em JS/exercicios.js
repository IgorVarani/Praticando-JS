//! Ex1

let nome = "Igor";
let idade = 19;
let profissao = "Dev";
let cidade = "São Caetano do Sul";

console.log("Meu nome é ${nome}, tenho ${idade} anos, trabalho como ${profissao} e moro em ${cidade}.");

//! Ex2

let produto = "Notebook Acer Nitro 5";
const preco = 4900;
let quantidade = 4;

console.log("Comprei ${quantidade} unidades de ${produto} por R$${preco} cada.")

//! Ex3

let valor1 = 10;
let valor2 = 20;

console.log("Soma:", valor1 + valor2);
console.log("Subtração:", valor1 - valor2);
console.log("Multiplicação:", valor1 * valor2);
console.log("Divisão:", valor1 / valor2);

//! Ex4

let texto = "Olá";
let numero = 10;
let booleano = true;
let lista = [1, 2, 3];
let objeto = {nome: "Igor"};

console.log(texto, "-", typeof texto);
console.log(numero, "-", typeof numero);
console.log(booleano, "-", typeof booleano);
console.log(lista, "-", typeof lista);
console.log(objeto, "-", typeof objeto);

//! Ex5

let numeroEx5 = "100";

//* string --> number
let numeroConvertido = Number(numero);
console.log(numeroConvertido, "-", typeof numeroConvertido);

//* number --> string novamente
let numeroString = String(numeroConvertido);
console.log(numeroString, "-", typeof numeroString);

//! Desafio

let nomeDesafio = "Should Be";
let idadeDesafio = 17;
let alturaDesafio = 166;
let pesoDesafio = 50;
let cidadeDesafio = "São Bernardo do Campo";
let profissaoDesafio = "Dev Front-End especialista em responsividade.";

console.log("Cadastro do Usuário:");
console.log(nomeDesafio);
console.log(idadeDesafio);
console.log(alturaDesafio);
console.log(pesoDesafio);
console.log(cidadeDesafio);
console.log(profissaoDesafio);