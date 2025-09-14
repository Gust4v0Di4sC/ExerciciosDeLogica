// Crie um programa que tenha um procedimento Gerador() que, quando chamado,
// mostre a mensagem "Olá, Mundo!" com algum componente visual (linhas)
// Ex: Ao chamar Gerador() aparece:
// +-------=======------+
// Olá, Mundo!
// +-------=======------+

class Ex086
{
  public void Gerador()
  {
    Console.WriteLine("+-------=======------+");
    Console.WriteLine("Olá, Mundo!");
    Console.WriteLine("+-------=======------+");
  }

  public void FirstCountdown()
  {
      Gerador();
  }
}

