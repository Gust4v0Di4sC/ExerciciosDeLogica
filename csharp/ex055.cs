// Vamos melhorar o jogo que fizemos no exercício 32. A partir de
// agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4
// tentativas para tentar acertar.

class Ex055
{
  public int player;
  public int machine;

  public int tries = 4;

  Random randNum = new Random();
  public void GuessTheNumber()
  {
    Console.WriteLine("-----------------------");
    Console.WriteLine("Bem Vindo ao AdvinheONumero!!!");
    Console.WriteLine("-----------------------");

    while (tries == 0)
    {
      Console.WriteLine("Digite um numero de 1 a 10: ");
      player = Convert.ToInt32(Console.ReadLine());

      machine = randNum.Next(1,10);

    if (player == 0)
    {
        Console.WriteLine("Encerrando o jogo");
        break;
    }

    if (tries == 0)
    {
        Console.WriteLine("Acabaram suas tentativas");
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
              Console.WriteLine($"Voce ainda tem {tries} tentativas");
              tries -= 1;
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
              Console.WriteLine($"Voce ainda tem {tries} tentativas");
              tries -= 1;
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
              Console.WriteLine($"Voce ainda tem {tries} tentativas");
              tries -= 1;
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
              Console.WriteLine($"Voce ainda tem {tries} tentativas");
              tries -= 1;
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
              Console.WriteLine($"Voce ainda tem {tries} tentativas");
              tries -= 1;
          }
      }
        break;
      default:Console.WriteLine("Opção Invalida"); break;
    }
    }
    

  }
}

