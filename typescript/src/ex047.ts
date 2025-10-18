// Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 +
// 450 + 400 + 350 + 300 + ... + 50 + 0

let startNumc : number = 500;
let totalNumbc : number = 0;


while (startNumc > 0) {
    process.stdout.write(startNumc + " + ");
    startNumc -= 50;
    totalNumbc+=startNumc;
}
console.log(` = ${totalNumbc}`);