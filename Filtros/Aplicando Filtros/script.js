const produtos = [
    { id: 1, nome: "Teclado Gamer", categoria: "Periféricos", preco: 120.90},
    { id: 2, nome: "Mouse Sem Fio", categoria: "Periféricos", preco: 89.90},
    { id: 3, nome: "Monitor 24 Polegadas", categoria: "Monitores", preco: 799.90},
    { id: 4, nome: "Headset USB", categoria: "Áudio", preco: 149.90},
    { id: 5, nome: "Notebook", categoria: "Computadores", preco: 3299.90},
    { id: 6, nome: "Webcam HD", categoria: "Acessórios", preco: 199.90},
];

const campoBusca = document.getElementById("campoBusca");
const ordenacao = document.getElementById("ordenacao");
const listaProdutos = document.getElementById("listaProdutos");

function mostrarProdutos()
{
    //* Pega o valor digitado e converte para minúsculo.
    let textoBusca = campoBusca.value.toLowerCase();

    //* Percorre a lista de produtos e valida se existe o nome buscado no filtro(input) dentro da lista de produtos.
    //* includes --> valida se existe o texto buscado dentro da lista.
    let produtosFiltrados = produtos.filter(produto => produto.nome.toLowerCase().includes(textoBusca));

    //? Filtro de ordenação (select)

    //* Verifica se a opção selecionada é "Nome A-Z".
    if(ordenacao.value === "nome-az")
    {
        // Ordena o array de produtos.
        produtosFiltrados.sort((a,b) =>
        {
            // localeCompare retorna:
            // Negativo --> A vem antes.
            // Positivo --> B vem antes.
            // Zero --> São iguais.
            return a.nome.localeCompare(b.nome);

            //
        });
    }

    //* Verifica se a opção é "nome Z-A".
    if(ordenacao.value === "nome-za")
    {
        //* Ordena invertendo a comparação.
        produtosFiltrados.sort((a, b) =>
        {
            // Trocamos a ordem (b com a).
            // Isso faz inverter (Z-A).
            return b.nome.localeCompare(a.nome);
        });
    }

    //* Verifica se é "menor preço".
    if(ordenacao.value === "preco-menor")
    {
        // Ordena pelos preços.
        produtosFiltrados.sort((a, b) =>
        {
            // Subtrai os valores:
            // Se der negativo --> a vem antes do b (menor preço).
            // Se der positivo --> b vem antes do a.
            return a.preco - b.preco;
        });
    }

    //* Verifica se é "maior preço"
    if(ordenacao.value === "preco-maior")
    {
        // Ordena do maior para o menor.
        produtosFiltrados.sort((a, b) => 
        {
            // Inverte a subtração.
            // Agora o maior valor vem primeiro.
            return b.preco - a.preco;
        });
    }

    //* Limpar a tela.
    listaProdutos.innerHTML = "";

    //* Se não encontrar nenhum produto.
    if(produtosFiltrados.length === 0)
    {
        listaProdutos.innerHTML = "<p class='mensagem'> Nenhum produto encontrado.</p>"
        return;
    }

    //* Cria o card de produto para cada produto.
    for(let i = 0; i < produtosFiltrados.length; i++)
    {
        let produto = produtosFiltrados[i];

        listaProdutos.innerHTML +=
        "<div class='card'>" +
            "<h2>" + produto.nome + "</h2>" +
            "<p> Categoria: " + produto.categoria + "</p>" +
            "<p class='preco'>R$ " + produto.preco.toFixed(2).replace(".", ",") + "</p>" +
        "</div>";
    }
};

//? Eventos.
campoBusca.addEventListener("input", () =>
{
    mostrarProdutos();
});

ordenacao.addEventListener("change", () =>
{
    mostrarProdutos();
});

mostrarProdutos();