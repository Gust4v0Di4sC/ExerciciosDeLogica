// Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
// qualquer e mostre uma contagem até esse valor:
// Ex: Digite um valor: 35
// Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!


class Ex042
{
  public int counter = 0;

  public void FirstCountdown()
  {
    Console.WriteLine("digite um numero inteiro e positivo");
    int inputCounter = Convert.ToInt32(Console.ReadLine());

    while (counter <= inputCounter)
    {
      counter++;
      Console.Write(counter);
    }
    Console.Write("Acabou!");
  }
}

