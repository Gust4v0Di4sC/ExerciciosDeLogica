// Crie um programa que melhore o procedimento Gerador() da questão anterior
// para que o programador possa escolher uma entre três bordas:
// +-------=======------+ Borda 1
// ~~~~~~~~:::::::~~~~~~~ Borda 2
// <<<<<<<<------->>>>>>> Borda 3


class Ex089
{
   public void Gerador(string msg, int repetições, int tipoBorda)
  {
    switch (tipoBorda)
    {
      case 1: Console.WriteLine("+-------=======------+");
        break;
      case 2:Console.WriteLine("~~~~~~~~:::::::~~~~~~~");
        break;
      case 3:Console.WriteLine("<<<<<<<<------->>>>>>> ");
        break;
      default:Console.WriteLine("Opção invalida");
        break;
    }
    Console.WriteLine(tipoBorda);
    for (int i = 0; i < repetições; i++)
    {
      Console.WriteLine($"{msg}");
    }
    Console.WriteLine(tipoBorda);
  }

  public void FirstCountdown()
  {
      Gerador("Aprendendo Portugol",4,2);
  }
}

