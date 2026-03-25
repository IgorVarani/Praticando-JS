let input = document.getElementById("input-tarefa");
let botaoAdicionar = document.getElementById("botao-adicionar");
let botaoLimpar = document.getElementById("botao-limpar");
let lista = document.getElementById("lista");
let contador = document.getElementById("contador");

let total = 0;

function atualizarContador()
{
    contador.textContent = "Tarefas: " + total;
}

botaoAdicionar.addEventListener("click", () =>
    {
    let texto = input.value.trim();

    if (texto === "")
    {
        alert("Digite uma tarefa!");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = texto;

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover ➖";
    botaoRemover.classList.add("botao-remover");

    span.addEventListener("click", () =>
    {
        span.classList.toggle("concluida");
    });

    botaoRemover.addEventListener("click", () =>
    {
        li.remove();
        total--;
        atualizarContador();
    });

    li.appendChild(span);
    li.appendChild(botaoRemover);
    lista.appendChild(li);

    total++;
    atualizarContador();

    input.value = "";
});

botaoLimpar.addEventListener("click", () =>
{
    lista.innerHTML = "";
    total = 0;
    atualizarContador();
});