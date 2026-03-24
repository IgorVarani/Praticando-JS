const nomeLanchonete = "JavaScript Lanches";
let nomeCliente = "Should Be";
let nomeProduto = "String Burguer";
let preco = 15;
let quantidade = 3;
const valorTotal = preco * quantidade;
const mensagemFinal = `Pedido realizado com sucesso! Obrigado por escolher o nosso incrível ${nomeProduto}, você é um(a) ótimo(a) cliente ${nomeCliente}.`

console.log(`🍔 JavaScript Lanches 🍔`);
console.log(`-------------------------`);
console.log(`Cliente: ${nomeCliente}`);
console.log(`Produto: ${nomeProduto}`);
console.log(`Preço: ${preco}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Total do Pedido: ${valorTotal}`);
console.log(mensagemFinal);