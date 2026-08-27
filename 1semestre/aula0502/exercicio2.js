const prompt = require ("prompt-sync")();
let idade = prompt ("Informe sua idade:");
idade = Number(idade);
if (idade >= 18) {
    console.log("Você pode pegar livros");
} else if (idade >= 16) {
    console.log("Você pode pegar livros ");
} else {
    console.log("Você não tem idade suficiente para pegar livros emprestados ");
}
