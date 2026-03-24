let nome = prompt("Digite seu nome: ");
console.log(nome);

//! 1. Sistema de verificação de temperatura.
/*
let temperatura = Number(prompt("Digite a temperatura atual:"));

if(temperatura < 20)
{
    console.log("Está frio!");
}
else
{
    console.log("Está calor!");
}
*/

//! 2. Verificar o nível de bateria.
/*
let bateria = Number(prompt("Digite o nível da bateria (%): "));

if(bateria <= 30)
{
    alert("Bateria fraca!");
}
else
{
    alert("Bateria normal.");
}
*/

//! 3. Sistema de acesso.
/*
let tipoUsuario = prompt("Digite o tipo do usuário (admin, cliente):");

if(tipoUsuario == "admin")
{
    console.log("Acesso total ao sistema.");
}
else if(tipoUsuario == "cliente")
{
    console.log("Acesso limitado.");
}
else
{
    console.log("Tipo inválido.");
}
*/

//! 4. Classificar qualidade de conexão de internet.
/*
let velocidade = Number(prompt("Digite a velocidade da internet:"));

if(velocidade >= 100)
{
    console.log("Internet rápida.");
}
else if(velocidade >= 50)
{
    console.log("Internet é média.");
}
else
{
    console.log("Internet lenta.");
}
*/

//* OPERADORES LÓGICOS
/*
    and => && => Operador E
    or => || => Operador OU
    not => ! => Não (negação)

//* and => Retorna true se todas as condições foram true.
let operadorAnd = (5 > 3) && (2 < 4)
// 5 é maior do que 3? True | 2 é menor do que 4? True
console.log(operadorAnd); // True

//* or => Retorna true se pelo menos uma das opções forem true.
let operadorOr = (5 < 3) || (2 < 4)
// 5 é menor do que 3? False | 2 é menor do que 4? True
console.log(operadorOr); // True

//* not => Não.
let operadorNot = !(5 > 3) // False
console.log(operadorNot);
*/

//! 5. Analisar volume de itens.
/*
let quantidade = 50;

if(quantidade === 0)
{
    console.log("Nenhum item selecionado,")
}
else if(quantidade < 5)
{
    console.log("Poucos itens."); 
}
else if(quantidade >= 5 && quantidade < 10);
{
    console.log("Muitos itens.");
}
*/

//* CONDICIONAL ANINHADA => uma condicional dentro de outra.
/*
const nota = 8;

if(nota >= 7)
{
    if(nota === 10)
    {
        console.log("Aprovado com premiação");
    }
    else
    {
        console.log("Aprovado!");
    }
}
else
{
    console.log("Reprovado.");
}
*/

//! 7. Adpatação da tela do dispositivo.
let dispositivo =  prompt("Você está usando um ceuluar, tablet ou computador");

if(dispositivo == "celular" || dispositivo == "tablet")
{
    console.log("Modo móvel ativo.");
}
else if (dispositivo == "computador")
{
    console.log("Modo Desktop ativo.");
}
else
{
    console.log("Dispositivo desconhecido.");
}

//! 8. Mudar tema do sistema.
let tema = prompt("Digite um tema: claro, escutro, azul.");

switch(tema)
{
    case "claro":
        console.log("Tema claro ativado.");
        break;
    case "escuro":
        console.log("Tema escuro ativado.");
        break;
    case "azul":
        console.log("Tema azul ativado.");
        break;
    default:
        console.log("Tema inválido.");
}