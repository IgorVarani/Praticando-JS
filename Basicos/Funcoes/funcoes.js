//! Funções nativas do JS...
//* Ajudam a manter o código limpo e organizado, evitam repetições de código e sempre são boas quando trabalhamos com "array".

//! MAP --> Percorre uma lista e cria uma nova lista com base na condição.
let numeros = [1, 2, 3, 4];

let numerosDobrados = numeros.map(function(num)
{
    return num * 2;
});

console.log(numerosDobrados); // <-- [2, 4, 6, 8]

//* Mesma função, mas agora com "arrow" function:
let numerosDobradosArrow = numeros.map(num => numero * 2);
console.log(numerosDobradosArrow);

//* A necessidade real de usar "return" (o primeiro exemplo) é notável quando a função precisa ter mais de uma linha.
numeros.map(num =>
{
    let resultado = num * 2;
    return resultado;
});

//! Filter --> Filtra os elementos de uma lista com base em uma condição.
let numerosFilter = [5, 10, 15, 20]

let maioresQueDez = numeros.filter(num => num > 10);
console.log(maioresQueDez); // <-- [15, 20]

//! Reduce --> Reduz os valores de um "array" para um único valor.
let numerosReduce = [1, 2, 3, 4];

//* Acumulador se chama total, a variável auxiliar se chama num.
//* Reduce sempre é --> (acumulador, auxiliar).
let soma = numeros.reduce((total, num) => total + num, 0); // <-- Esse 0 é o valor inicial de total(acumulador).

//! Find --> Retorna o primeiro elemento que atenda a condição.
let produtos = [
    {id: 1, nome: "Teclado", preco: 50},
    {id: 2, nome: "Mouse", preco: 30}
]

let item = produtos.find(produto => produto.id === 2);
console.log(item);

//! Split --> Divide uma string em partes, transformando em uma lista.
let frase = "JS é muito bom!!!";

//* Criando um array de palavras usando split:
let palavras = frase.split("o");

console.log(palavras);

//! Trim --> Remove espaços no início e no fim de uma string.
let nome = "    João    ";
let nomeLimpo = nome.trim();

console.log(nome);
console.log(nomeLimpo);

//! Includes --> Verifica se existe um valor dentro de uma lista ou string.
let frutas = ["maçã", "banana"];

let frutasIncludes = frutas.includes("banana");
console.log(frutasIncludes); // true

//! toLowerCase & toUpperCase --> Lower transforma textos em minúsculo, Upper em maiúsculo.
let nomeToCase = "KÉSSIA";
let cargoToCase = "instrutora";

console.log(nomeToCase.toLowerCase()); // késsia
console.log(cargoToCase.toUpperCase()); // INSTRUTORA

//! Foreach --> Percorre todos os elementos do array, mas diferente do "Map", não retorna um novo array.
let nomes = ["Pedro", "João", "Guilherme"];

nomes.forEach(nome => console.log("Seu nome é: ", nome));

//! Some --> Verifica se pelo menos um item atende a condição.
let numerosSome = [1, 3, 5, 8];

let temPar = numeros.some(num => num % 2 === 0);
console.log(temPar); // true

//! Every --> Verifica se todos os elementos atendem a uma condição
let numerosEvery = [1, 3, 5, 8];

let todosPares = numeros.every(num => num % 2 === 0);
console.log(todosPares); // falso

//! Sort --> Ordena os elementos do array.
let numerosSort= [3, 5, 2, 4]

numeros.sort((a, b) => a - b);
console.log(numeros);

//! Reverse --> Inverte a ordem de um array.
let numerosReverse = [1, 2, 3];

numerosReverse.reverse();
console.log(numerosReverse)

//! Join --> Junta os elementos de um array em uma string.
let palavrasJoin = ["JS", "é", "muito", "bom"];

let fraseJoin = palavrasJoin.join(" ");
console.log(fraseJoin); // "JS é muito bom"

//! Push & Pop --> Push adiciona elementos no final do array, Pop elimina elementos no final do array.
let lista =["A", "B"];

lista.push("C"); // Adiciona
lista.pop(); // Remove
console.log(lista);

//! Shift & Unshift --> Shift remove do início do array, Unshift adiciona.
let listaShift = ["B", "C"];

lista.unshift("A");

//! Slice --> Cria uma cópia de uma parte da lirax,
let numerosSlice = [1, 2, 3, 4]
let parte = numeros.slice(1, 3); // <-- 1 e 3 são as posições do array.

console.log(parte);

//! Splice --> Remove ou adiciona elementos em qualquer posição.
// array.splice(index, count, item1, item 2)
// index --> índice (posição do elemento no array).
// count --> número de itens a serem removidos (pode ser 0).
// item1, item2... --> itens a serem adicionados.

//* Removendo elementos sem adicionar:
let numerosSplice = [1, 2, 3, 4]

numerosSplice.splice(1, 1);
console.log(numerosSplice);

//* Removendo elementos e adicionando mais dois elementos:
let frutasSplice = ["Banana", "Laranja", "Maçã", "Manga"]

frutasSplice.splice(0, 1, "Limão", "Kiwi");
console.log(frutasSplice);

//* Adiciona dois elementos sem remover nenhum:
let frutasNovas = ["Banana", "Laranja", "Maçã", "Manga"];

frutasNovas.splice(2, 0, "Limão", "Kiwi");
console.log(frutasNovas);

//! Replace --> Substitui uma parte da string.
let texto = "Olá mundo!";

let novoTexto = texto.replace("mundo", "cliente");
console.log(novoTexto);