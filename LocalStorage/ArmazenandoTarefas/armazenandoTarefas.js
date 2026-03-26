const inputTarefa = document.getElementById("input-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const botaoLimpar = document.getElementById("botao-limpar");
const listaTarefas = document.getElementById("lista-tarefas");
const contador = document.getElementById("contador");

let tarefas = [];

//! Função para salvar tarefas.
function salvarTarefas()
{
    /*
    ! localStorage -> armazenamento local do navegador.
    ! setItem -> salva no armazenamento local o conteúdo recebido.
    ! JSON.stringify(tarefas) -> pega a lista de tarefas, converte para texto (string) e armazena esse texto.
    */
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

//! Função para mostrar tarefas na tela.
function mostrarTarefas()
{
    listaTarefas.innerHTML = "";

    for(let i = 0; i < tarefas.length; i++)
    {
        const li = document.createElement("li");
        li.innerText = tarefas[i]

        const botaoRemover = document.createElement("button");
        botaoRemover.innerText = "🗑️";
        botaoRemover.className = "botao-remover";

        botaoRemover.addEventListener("click", () =>
        {
            removerTarefas(i);
        });

        li.appendChild(botaoRemover);
        listaTarefas.appendChild(li);
    }
}

function removerTarefas(posicaoTarefa)
{
    //* Splice --> (posicaoInicial, qtde_itens)
    tarefas.splice(posicaoTarefa, 1)

    //* Depois de remover, chamo a função de salvar no localStorage
    salvarTarefas();

    //* Mostra as tarefas atualizadas, sem as que foram removidas
    mostrarTarefas();
}

//! Função para adicionar tarefas.
function adicionarTarefas()
{
    const valorTarefa = inputTarefa.value.trim();

    if(valorTarefa === "")
    {
        alert("Digite uma tarefa!");
        return;
    }

    //* Impede tarefas repetidas.
    if(tarefas.includes(valorTarefa))
    {
        alert("Essa tarefa já existe!");
        return;
    }

    tarefas.push(valorTarefa);
    inputTarefa.value = "";

    salvarTarefas();
    mostrarTarefas();
}

//! Função para carregar tarefas salvas no localStorage.
function carregarTarefas()
{
    //* Pega as tarefas e armazena na variável "tarefasSalvas".
    const tarefasSalvas = localStorage.getItem("tarefas");

    //* Se existir algo dentro de tarefas salvas, então converte a tarefa e mostra na tela.
    if(tarefasSalvas)
    {
        tarefas = JSON.parse(tarefasSalvas); // Transforma o texto em array novamente.
        mostrarTarefas();
    }
}

botaoAdicionar.addEventListener("click", adicionarTarefas);
carregarTarefas();

//! Função para limpar todas as tarefas.
function limparTarefas()
{
    if(tarefas.length === 0) return;

    const confirmar = confirm("Tem certeza que deseja apagar tudo?");
    
    if(confirmar)
    {
        tarefas = [];
        salvarTarefas();
        mostrarTarefas();
    }
}

botaoLimpar.addEventListener("click", limparTarefas);