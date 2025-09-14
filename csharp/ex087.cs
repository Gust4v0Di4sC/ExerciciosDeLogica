// Crie um programa que melhore o procedimento Gerador() da questão anterior
// para que mostre uma mensagem personalizada, passada como parâmetro.
// Ex: Ao chamar Gerador("Aprendendo Portugol") aparece:
// +-------=======------+
// Aprendendo Portugol
// +-------=======------+

class Ex087
{
  public void Gerador(string msg)
  {
    Console.WriteLine("+-------=======------+");
    Console.WriteLine($"{msg}");
    Console.WriteLine("+-------=======------+");
  }

  public void FirstCountdown()
  {
      Gerador("Aprendendo Portugol");
  }
}

