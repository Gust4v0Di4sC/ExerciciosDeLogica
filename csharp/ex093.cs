// Faça um programa que tenha um procedimento chamado Contador() que recebe
// três valores como parâmetro: o início, o fim e o incremento de uma contagem. O
// programa principal deve solicitar a digitação desses valores e passá-los ao
// procedimento, que vai mostrar a contagem na tela.

// Ex: Para os valores de início (4), fim (20) e incremento(3) teremos
// Contador(4, 20, 3) vai mostrar na tela 4 >> 7 >> 10 >> 13 >> 16 >> 19 >> FIM


class Ex093
{

  public void Contador(int value1, int value2, int value3)
  {
    for (int i = value1; i <= value2; i += value3)
    {
      Console.Write($"{i} >> ");
    }
    Console.WriteLine("FIM");
  }


  public void InputValores()
  {
    Console.WriteLine("Digite o valor do inicio:");
    int valueOne = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite o valor do fim:");
    int valueTwo = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Digite o valor do incremento:");
    int valueThree = Convert.ToInt32(Console.ReadLine());

    Contador(valueOne, valueTwo, valueThree);
  }
 

  public void FirstCountdown()
  {
    InputValores();
  }
}

