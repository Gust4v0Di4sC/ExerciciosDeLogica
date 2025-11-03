// Crie um programa que melhore o procedimento Gerador() da questão anterior
// para que mostre uma mensagem personalizada, passada como parâmetro.
// Ex: Ao chamar Gerador("Aprendendo Portugol") aparece:
// +-------=======------+
// Aprendendo Portugol
// +-------=======------+

function GeradorPlus(message : string) {
    console.log("+-------=======------+");
    console.log(`${message}`);
    console.log("+-------=======------+");
}

GeradorPlus("Aprendendo TypeScript");