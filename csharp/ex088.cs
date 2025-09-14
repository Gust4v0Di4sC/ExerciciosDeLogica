// Crie um programa que melhore o procedimento Gerador() da questão anterior
// para que mostre uma mensagem vário
// Ex: Ao chamar Gerador("Aprendendo Portugol", 4) aparece:
// +-------=======------+
// Aprendendo Portugol
// Aprendendo Portugol
// Aprendendo Portugol
// Aprendendo Portugol
// +-------=======------+


class Ex088
{
   public void Gerador(string msg,int repetições)
  {
    Console.WriteLine("+-------=======------+");
    for (int i = 0; i < repetições; i++)
    {
      Console.WriteLine($"{msg}");
    }
    Console.WriteLine("+-------=======------+");
  }

  public void FirstCountdown()
  {
      Gerador("Aprendendo Portugol",4);
  }
}

