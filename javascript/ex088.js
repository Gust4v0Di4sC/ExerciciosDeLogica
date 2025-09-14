// Crie um programa que melhore o procedimento Gerador() da questão anterior
// para que mostre uma mensagem várias vezes
// Ex: Ao chamar Gerador("Aprendendo Portugol", 4) aparece:
// +-------=======------+
// Aprendendo Portugol
// Aprendendo Portugol
// Aprendendo Portugol
// Aprendendo Portugol
// +-------=======------+


function Generator2(message,times){
   console.log("+-------=======------+")
   for (let i = 1; i <= times; i++) {
      console.log(`${message}`);
   }
   console.log("+-------=======------+")
}

Generator2("Aprendendo Portugol",2);





