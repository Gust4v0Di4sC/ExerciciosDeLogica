// Crie um programa que melhore o procedimento Gerador() da questão anterior
// para que o programador possa escolher uma entre três bordas:
// +-------=======------+ Borda 1
// ~~~~~~~~:::::::~~~~~~~ Borda 2
// <<<<<<<<------->>>>>>> Borda 3

function GeradorPlusUltra(message : string, times: number, border: number) {
    let borderTemp : string = "";
    switch (border) {
        case 1:
            borderTemp = "+-------=======------+"
            break;
        case 2:
            borderTemp = "~~~~~~~~:::::::~~~~~~~ "
            break;
        case 3:
            borderTemp = "<<<<<<<<------->>>>>>> "
            break;

        default:
            console.log("opção invalida");
            break;
    }

    console.log(borderTemp);
    for (let i = 0; i < times; i++) {
        console.log(`${message}`);
    }
    console.log(borderTemp);
}

GeradorPlusUltra("Aprendendo TypeScript",4,2);