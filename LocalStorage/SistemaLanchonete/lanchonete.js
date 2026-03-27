const inputPedido = document.getElementById("inputPedido");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaPedidos = document.getElementById("listaPedidos");
const btnAtender = document.getElementById("btnAtender");
const pedidoAtual = document.getElementById("pedidoAtual");

let pedidos = [];

//! Carregar dados do localStorage.
const dados = localStorage.getItem("pedidos");

//* Caso exista dados no localStorage.
if(dados)
{
    pedidos = JSON.parse(dados);
    renderizar();
}

function salvar()
{
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

//! Mostrar na tela.
function renderizar()
{
    listaPedidos.innerHTML = "";

    pedidos.forEach((pedido, posicao) =>
    {
        const li = document.createElement("li");
        li.innerText = pedido.texto;

        if(pedido.concluido)
        {
            li.style.textDecoration = "line-through";
        }

        li.addEventListener("click", () =>
        {
            li.style.textDecoration = "line-through";
        });

        const btnRemover = document.createElement("button");
        btnRemover.innerText = "❌";

        btnRemover.addEventListener("click", () =>
        {
            pedidos.splice(posicao, 1);
            salvar();
            renderizar();
        });

        li.appendChild(btnRemover);
        listaPedidos.appendChild(li);
    });
}

//! Adicionar pedido.
btnAdicionar.addEventListener("click", () =>
{
    const texto = inputPedido.value;

    if(texto === "")
    {
        alert("Digite um pedido!");
        return;
    }

    pedidos.push(
    {
        texto: textoDigitado,
        concluido: false
    });

    salvar();
    renderizar();

    pedidoAtual.innerText = "Nenhum pedido sendo atendido";
    inputPedido.value = "";
});

//! Atender pedido.
btnAtender.addEventListener("click", () =>
{
    //* Encontrar o que NÃO está concluído.
    const proximo = pedidos.find(pedido => pedido.concluido == false);

    if(!proximo)
    {
        pedidoAtual.innerText = "Todos os pedidos já foram atendidos";
        return;
    }

    proximo.concluido = true;
    pedidoAtual.innerText = "Atendido: " + proximo.texto;
});