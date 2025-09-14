// [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)
class Ex031
{

  public int player;
  public int machine;

  Random randNum = new Random();
  public void JoKenPo()
  {
    Console.WriteLine("-----------------------");
    Console.WriteLine("Bem Vindo ao JoKenPO!!!");
    Console.WriteLine("-----------------------");

    while (true)
    {
      Console.WriteLine("Digite uma opção 1-Tesoura,2-Papel, 3-Pedra: ");
    player = Convert.ToInt32(Console.ReadLine());

    machine = randNum.Next(1,4);

    if (player == 4)
    {
        Console.WriteLine("Encerrando o jogo");
        break;
    }

    Console.Clear();
    switch (machine)
    {
      case 1: // Tesoura
        {
          if (player == 2)
          {
            Console.WriteLine("Você perdeu ,Jogou Papel, a maquina jogou tesoura");
          }
          else if (player == 1)
          {
            Console.WriteLine("Você empatou,Jogou Tesoura,  a maquina jogou tesoura");
          }
          else
          {
            Console.WriteLine("Você ganhou, Jogou pedra , a maquina jogou tesoura");
          }
        }
          break;
      case 2: // Papel
      {
          if (player == 2)
          {
            Console.WriteLine("Você empatou,Jogou Papel,  a maquina jogou papel");  
          }
          else if (player == 1)
          {
            Console.WriteLine("Você perdeu ,Jogou Papel, a maquina jogou tesoura");
          }
          else
          {
            Console.WriteLine("Você ganhou, Jogou pedra , a maquina jogou papel");
          }
        }
        break;
      case 3: //Pedra
        {
        if (player == 2)
          {
            Console.WriteLine("Você ganhou,Jogou Papel,  a maquina jogou pedra");  
          }
          else if (player == 1)
          {
            Console.WriteLine("Você perdeu ,Jogou tesoura, a maquina jogou pedra");
          }
          else
          {
            Console.WriteLine("Você empatou, Jogou pedra , a maquina jogou pedra");
          }
      }
        break;
      default:Console.WriteLine("Opção Invalida"); break;
    }
    }
    

  }
}

