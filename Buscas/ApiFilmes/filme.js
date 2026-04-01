const campoBusca = document.getElementById("campo-busca");
const listaFilmes = document.getElementById("lista-filmes");

//const API_KEY = "b605a85583ac4057349ab91c8f72c575";
const URL_BASE = "https://api.themoviedb.org/3";
const URL_IMAGEM = "https://image.tmdb.org/t/p/w500";

//? Mostrar resultados buscados.
function mostrarResultados(lista)
{
    listaFilmes.innerHTML = "";

    lista.forEach(item =>
    {
        if (!item.poster_path) return;

        const titulo = item.title || item.name;
        const nota = item.vote_average != null ? item.vote_average : "N/A";

        const div = document.createElement("div");
        div.classList.add("filme");

        div.innerHTML =
        `
            <img src="${URL_IMAGEM + item.poster_path}" alt="${titulo}">
            <div class="info">
                <h3>${titulo}</h3>
                <span>⭐ ${nota}</span>
            </div>
        `;

        listaFilmes.appendChild(div);
    });
}

//? Buscar filmes e séries.
async function buscarTitulos(termoDigitado)
{
    try {
        const resposta = await fetch(
            `${URL_BASE}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(termoDigitado)}&language=pt-BR`
        );

        if (!resposta.ok) throw new Error("Erro na requisição");

        const dados = await resposta.json();
        mostrarResultados(dados.results);
    }
    catch (erro)
    {
        console.error("Erro na busca:", erro);
    }
}

//? Buscar filmes populares.
async function buscarPopulares()
{
    try {
        const resposta = await fetch(`${URL_BASE}/movie/popular?api_key=${API_KEY}&language=pt-BR`);

        if (!resposta.ok) throw new Error("Erro na requisição de populares");

        const dados = await resposta.json();
        mostrarResultados(dados.results);
    }
    catch (erro)
    {
        console.error("Erro ao carregar populares:", erro);
    }
}

//? Adicionar evento para carregar o conteúdo popular assim que a página abrir.
window.addEventListener("load", () =>
{
    buscarPopulares();
});

//? Busca em tempo real de filmes e séries com debounce.
let timeout;
campoBusca.addEventListener("input", () =>
{
    clearTimeout(timeout);

    timeout = setTimeout(() =>
    {
        const termoDigitado = campoBusca.value.trim();

        if (termoDigitado.length > 2)
        {
            buscarTitulos(termoDigitado);
        } else
        {
            buscarPopulares();
        }
    });
});