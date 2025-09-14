// [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
// jogador vai tentar descobrir qual foi o valor sorteado.

class Ex032
{
  public int player;
  public int machine;

  Random randNum = new Random();
  public void GuessTheNumber()
  {
    Console.WriteLine("-----------------------");
    Console.WriteLine("Bem Vindo ao AdvinheONumero!!!");
    Console.WriteLine("-----------------------");

    while (true)
    {
      Console.WriteLine("Digite um numero de 1 a 5: ");
      player = Convert.ToInt32(Console.ReadLine());

      machine = randNum.Next(1,6);

    if (player == 0)
    {
        Console.WriteLine("Encerrando o jogo");
        break;
    }

    Console.Clear();
    switch (machine)
    {
      case 1: // Tesoura
        {
          if (player == 1)
          {
            Console.WriteLine("Parabéns voce acertou!!");
          }
          else
          {
            Console.WriteLine("Infelizmente  você errou!!");
          }
        }
          break;
      case 2: // Papel
      {
          if (player == 2)
          {
            Console.WriteLine("Parabéns voce acertou!!");
          }
          else
          {
            Console.WriteLine("Infelizmente  você errou!!");
          }
        }
        break;
      case 3: //Pedra
        {
        if (player == 3)
          {
            Console.WriteLine("Parabéns voce acertou!!");
          }
          else
          {
            Console.WriteLine("Infelizmente  você errou!!");
          }
      }
        break;
      case 4: //Pedra
        {
        if (player == 4)
          {
            Console.WriteLine("Parabéns voce acertou!!");
          }
          else
          {
            Console.WriteLine("Infelizmente  você errou!!");
          }
      }
        break;
      case 5: //Pedra
        {
        if (player == 5)
          {
            Console.WriteLine("Parabéns voce acertou!!");
          }
          else
          {
            Console.WriteLine("Infelizmente  você errou!!");
          }
      }
        break;
      default:Console.WriteLine("Opção Invalida"); break;
    }
    }
    

  }
}

