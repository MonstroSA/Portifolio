/*Está e uma função para apresenta eu thiago e minha neta Alexia vitoria*/
/*Também para perguntar a pessoa que estiver acessando o site*/
function passarmouse() {
    alert("Olá, Mundo! Vovô Te amo ALEXIA VITORIA.");
    let nome = prompt("Qual seu Nome: ", "Seu nome Aqui.");
    alert('Sejá Bem vindo, Sr(a): ' + nome + '. ' +
        "\n Agora acesse nossos contatos, aqui na pagina. SOS Prevenções, Obrigado!!");

    let email = prompt("Digite seu E-mail para podermos interagir: ");
    confirm("Você aceita que enviaremos solicitações de amizades ?")
}
/*Local onde é armazendo o id (indentificador de tag), para que a função ajá com sua respectivo rabalho */
var bloco1 = document.getElementById("#btn1");

var bloco2 = document.getElementById("#btn2");

/*Nestas funções são para que sejá a troca de ação de uma parte do código.*/

function mostrarVideo(_bloco1) {
    console.log("informacao1");
    if (informacao1.style.display = 'none') {
        informacao1.style.display = 'block';
    }
}

function fechartela(_bloco2) {
    console.log("informacao1")
    informacao1.style.display = 'none';
}