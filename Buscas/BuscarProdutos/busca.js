const produtosMock =
{
    "3060":
    {
        nome: "Nvidia GeForce RTX3060",
        preco: "2400",
        categoria: "GPU"
    },

    "2070":
    {
        nome: "Nvidia GeForce RTX2070",
        preco: "2200",
        categoria: "GPU"
    },

    "5100":
    {
        nome: "Intel(R) Core(TM) I5-10500",
        preco: "1400",
        categoria: "CPU"
    },

    "7140":
    {
        nome: "Intel(R) Core(TM) I7-14500",
        preco: "2900",
        categoria: "CPU"
    }
};

const campoCodigo = document.getElementById("input-codigo");
const botaoBuscar = document.getElementById("botao-buscar");
const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById("preco");
const campoCategoria = document.getElementById("categoria");

function preencherCampos(dados)
{
    campoNome.value = dados.nome;
    campoPreco.value = dados.preco;
    campoCategoria.value = dados.categoria;
}

function limparCampos()
{
    campoNome.value = "";
    campoPreco.value = "";
    campoCategoria.value = "";
}

function buscarProdutos()
{
    //? MUITO provavelmente nem precisa porque o código já é "number" no html. Mas vai que ocorre algo né...
    const produto = campoCodigo.value.replace(/\D/g, "").trim();

    if(produto.length !== 4)
    {
        alert("Todo código tem 4 digitos e você não deve apertar o botão sem isso.");
        limparCampos();
        return;
    }

    const dadosProdutos = produtosMock[produto];
    
    if(!dadosProdutos)
    {
        alert("O código não pertence a nenhum produto.")
        limparCampos();
        return;
    }

    preencherCampos(dadosProdutos);
}

botaoBuscar.addEventListener("click", buscarProdutos);