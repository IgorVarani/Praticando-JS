const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const botao = document.getElementById("botao");

let estado = "inicial";

botao.addEventListener("click", () =>
{
    if(estado === "inicial")
    {
        titulo.style.color = "#ff6090ff";
        texto.style.color = "#ff6090ff";
        botao.style.border = "4px solid #ff6090ff";

        texto.innerText = "Toque novamente para dar deslike.";
        botao.innerText = "❤️";

        estado = "like";
    }
    else if(estado === "like")
    {
        titulo.style.color = "#FFFFFF";
        texto.style.color = "#FFFFFF";
        botao.style.border = "4px solid #FFFFFF";
        
        texto.innerText = "Toque novamente para voltar ao estado inicial.";
        botao.innerText = "👎";

        estado = "deslike";
    }
    else if(estado === "deslike")
    {
        titulo.style.color = "#FFFFFF";
        texto.style.color = "#FFFFFF";
        botao.style.border = "4px solid #FFFFFF";
        
        texto.innerText = "Toque no botão abaixo para dar like.";
        botao.innerText = "👍";

        estado = "inicial";
    }
});