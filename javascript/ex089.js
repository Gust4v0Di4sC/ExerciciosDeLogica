// Crie um programa que melhore o procedimento Gerador() da questão anterior
// para que o programador possa escolher uma entre três bordas:
// +-------=======------+ Borda 1
// ~~~~~~~~:::::::~~~~~~~ Borda 2
// <<<<<<<<------->>>>>>> Borda 3

var readline = require('readline-sync');

function Generator2(message,times,border){
   let borderLayout;

   switch (border) {
      case 1:
         borderLayout = "+-------=======------+"
      break;

      case 2:
         borderLayout = "~~~~~~~~:::::::~~~~~~~"
      break;

      case 3:
         borderLayout = "<<<<<<<<------->>>>>>>"
      break;
   
      default:
         break;
   }

   console.log(borderLayout);
   for (let i = 1; i <= times; i++) {
      console.log(`${message}`);
   }
   console.log(borderLayout);
}

//Com entrada do usuario:
// function Generator2(message,times){
//    let borderLayout;
//    let border = parseInt(readline.question(`Escolha uma borda: 1, 2 ou 3 \n     +-------=======------+ Borda 1
//     ~~~~~~~~:::::::~~~~~~~ Borda 2
//     <<<<<<<<------->>>>>>> Borda 3 \n Digite:  `));

//    switch (border) {
//       case 1:
//          borderLayout = "+-------=======------+"
//       break;

//       case 2:
//          borderLayout = "~~~~~~~~:::::::~~~~~~~"
//       break;

//       case 3:
//          borderLayout = "<<<<<<<<------->>>>>>>"
//       break;
   
//       default:
//          break;
//    }

//    console.log(borderLayout);
//    for (let i = 1; i <= times; i++) {
//       console.log(`${message}`);
//    }
//    console.log(borderLayout);
// }

Generator2("Aprendendo Portugol",2,3);





