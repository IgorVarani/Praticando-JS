const titulo = document.getElementById("titulo");
const divLogin = document.getElementById("divLogin");
let usuario = document.getElementById("usuario");
let senha = document.getElementById("senha");
const entrar = document.getElementById("entrar");

const usuarioCorreteo = "admin"
const senhaCorreta = "1234"

entrar.addEventListener("click", () =>
{
    if(usuario.value === "admin" && senha.value === "1234")
    {
        alert("Login realizado com sucesso!");
    }
    else
    {
        alert("Usuário ou senha inválidos.");
    }
});