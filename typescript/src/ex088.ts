// Crie um programa que melhore o procedimento Gerador() da questão anterior
// para que mostre uma mensagem vário
// Ex: Ao chamar Gerador("Aprendendo Portugol", 4) aparece:
// +-------=======------+
// Aprendendo Portugol
// Aprendendo Portugol
// Aprendendo Portugol
// Aprendendo Portugol
// +-------=======------+

function GeradorPlusPlus(message : string, times: number) {
    console.log("+-------=======------+");
    for (let i = 0; i < times; i++) {
        console.log(`${message}`);
    }
    console.log("+-------=======------+");
}

GeradorPlusPlus("Aprendendo TypeScript",4);